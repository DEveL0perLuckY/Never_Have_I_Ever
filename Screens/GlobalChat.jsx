import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPm1muTYQVOSck2MLHUdN5umKT1DOugR8",
  authDomain: "the-helix-401914.firebaseapp.com",
  projectId: "the-helix-401914",
  storageBucket: "the-helix-401914.appspot.com",
  messagingSenderId: "123241612883",
  appId: "1:123241612883:web:f2458c36d2d0db3c3368a6",
  measurementId: "G-NF1KHT29RS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const GlobalChat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const flatListRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "globalChat"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(updatedMessages);
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    try {
        setNewMessage("");
      await addDoc(collection(db, "globalChat"), {
        text: newMessage,
        timestamp: new Date().toISOString(),
        isCurrentUser: true,
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const renderMessage = ({ item }) => {
    const isCurrentUser = item.isCurrentUser || false;
    const messageStyle = isCurrentUser
      ? [styles.message, styles.currentUserMessage]
      : styles.message;

    return (
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={[styles.timestamp]}>
            {formatTimestamp(item.timestamp)}
          </Text>
        </View>

        <View style={messageStyle}>
          {!isCurrentUser && (
            <View style={styles.profileIconContainer}>
              <Image
                source={require("../assets/profile.png")}
                style={styles.profileIcon}
              />
            </View>
          )}
          <View style={styles.messageContent}>
            <Text
              style={
                isCurrentUser ? styles.currentUserText : styles.otherUserText
              }
            >
              {item.text}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Group Chat !!</Text>
        <Text style={styles.subtitle}>From Never I Have Ever</Text>
      </View>
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        onContentSizeChange={() => scrollToBottom()}
        onLayout={() => scrollToBottom()}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          placeholder="Type your message..."
          placeholderTextColor="white"
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={sendMessage}
          disabled={!newMessage.trim()}
          style={styles.sendButton}
        >
          <Image
            source={require("../assets/send.png")}
            style={[styles.sendIcon]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#ccc",
  },
  message: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: "80%",
    alignSelf: "flex-start",
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
  },
  messageContent: {
    flexDirection: "column",
    flex: 1,
  },
  currentUserMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#6f3efc",
  },
  currentUserText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#f5f3ff",
    marginLeft: 10,
    textAlign: "right",
  },
  otherUserText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    color: "white",
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 20,
    marginRight: 10,
    padding: 10,
  },
  timestamp: {
    color: "#ffffff",
    fontSize: 12,
    marginTop: 10,
  },
  sendButton: {
    borderRadius: 25,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  sendIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  profileIconContainer: {
    marginRight: 10,
  },
  profileIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default GlobalChat;
