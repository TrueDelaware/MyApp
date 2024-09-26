import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, Button, View } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup
  const [msg, setMsg] = useState('');

  const handlePress = () => {
    if (isLogin) {
      // Validate Login Fields
      if (email === '' || password === '') {
        setMsg('Please fill out all fields.');
        return;
      }
      setMsg('Login successful');
    } else {
      // Validate Signup Fields
      if (email === '' || password === '' || fName === '' || lName === '') {
        setMsg('Please fill out all fields.');
        return;
      }
      setMsg('Registration successful');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>{isLogin ? "Login" : "Sign Up"}</Text>
        
        {!isLogin && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter first name"
              value={fName}
              onChangeText={text => setFName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter last name"
              value={lName}
              onChangeText={text => setLName(text)}
            />
          </>
        )}
        
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title={isLogin ? "Login" : "Sign Up"}
              onPress={handlePress}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={isLogin ? "Sign Up" : "Login"}
              onPress={() => setIsLogin(!isLogin)}
            />
          </View>
        </View>

        {msg ? <Text style={styles.msg}>{msg}</Text> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    width: "25%",
    alignSelf: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    width: '10%', // 75% of the width
    marginBottom: 15, // spacing between buttons
  },
  msg: {
    marginTop: 20,
    color: 'green',
    textAlign: 'center',
  },
});
