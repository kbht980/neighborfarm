import React, { useState, useEffect } from "react";
// import firebase from "firebase";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Button from "../components/Button";
import { Divider, SocialIcon } from "react-native-elements";

export default function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ログイン状態の監視
  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       props.navigation.reset({
  //         index: 0,
  //         routes: [{ name: 'MemoList' }],
  //       });
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  // firebaseログイン
  //   const handlePress = () => {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(email, password)
  //       .then((userCredential) => {
  //         const { user } = userCredential;
  //         // eslint-disable-next-line no-console
  //         console.log(user.uid);

  //         props.navigation.reset({
  //           index: 0,
  //           routes: [{ name: 'MemoList' }],
  //         });
  //       })
  //       .catch((error) => {
  //         Alert.alert(error.code);
  //       });
  //   };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>
          携帯電話番号またはメールアドレスでログイン
        </Text>
        <TextInput
          style={styles.input}
          value='Email Address'
          // eslint-disable-next-line react/jsx-no-duplicate-props
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholder='携帯電話番号/メールアドレス'
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          value='Password'
          // eslint-disable-next-line react/jsx-no-duplicate-props
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          textContentType='password'
          secureTextEntry
          placeholder='パスワード'
        />
        <Button
          label='ログイン'
          style={{
            alignSelf: "center",
          }}
          onPress={() => {}}
        />

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("PwForget");
          }}
        >
          <Text style={styles.passText}>パスワードをお忘れの方</Text>
        </TouchableOpacity>

        <Divider style={styles.divider} />
        <Text style={styles.title}>外部サイトIDでログイン</Text>

        <SocialIcon
          title='Facebookアカウントでログイン'
          button
          type='facebook'
          style={{ borderRadius: 4 }}
        />
        <SocialIcon
          title='Twitterアカウントでログイン'
          button
          type='twitter'
          style={styles.spacer}
        />
        <Divider style={styles.divider} />

        <Text style={styles.title}>アカウントをお持ちでない方はこちら</Text>
        <Button
          label='ログイン'
          style={{
            alignSelf: "center",
            backgroundColor: "#F8CA5F",
          }}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#F0F4F8",
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 16,
    lineHeight: 32,
    marginBottom: 24,
    alignSelf: "center",
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3",
  },
  footer: {
    flexDirection: "row",
  },
  divider: {
    flex: 0,
    marginBottom: 30,
  },
  spacer: {
    marginBottom: 35,
    borderRadius: 4,
  },
  passText: {
    marginBottom: 50,
    alignSelf: "center",
    color: "#467FD3",
  },
});
