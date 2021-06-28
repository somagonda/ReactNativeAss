// import React from 'react';
// import { Text, View, TextInput, TouchableOpacity } from 'react-native';
// import styles from './StyleLogin';
// import Items from '../Items/Items';

// export default class Login extends React.Component {
//   state={
//     username:"",
//     password:""
//   }

//   componentDidMount(){  
//     this.setState({
//       isVisible : false
//     })  
//   }

//   handleSubmit = () => {
//       if(this.state.username==='admin' && this.state.password==='admin')
//         this.setState({isVisible : true})
//   }

//   render(){           
//     let Item_Screen = (  
//         <Items />
//       )
//     return (
//       <>
//         {  
//           (this.state.isVisible === true) ? Item_Screen : (
//           <View style={styles.container}>
//             <Text style={styles.logo}>Alberta App</Text>
//             <View style={styles.inputView} >
//               <TextInput  
//                 style={styles.inputText}
//                 placeholder="Username..." 
//                 placeholderTextColor="#003f5c"
//                 onChangeText={text => this.setState({username:text})}/>
//             </View>
//             <View style={styles.inputView} >
//               <TextInput  
//                 secureTextEntry
//                 style={styles.inputText}
//                 placeholder="Password..." 
//                 placeholderTextColor="#003f5c"
//                 onChangeText={text => this.setState({password:text})}/>
//             </View>
//             <TouchableOpacity style={styles.loginBtn} onPress={this.handleSubmit}>
//               <Text style={styles.loginText}>LOGIN</Text>
//             </TouchableOpacity>
//           </View>)  
//         }  
//       </>
//     );
//   }
// }





import React,{useState,useEffect} from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './StyleLogin';
import Items from '../Items/Items';

function LoginScreen() {

    const [username, setUserName] = useState("");
    const[password,setPassword] = useState("");
    const [isVisible,setVisible]= useState(false);

    useEffect(() => {  
        setVisible(false);
    },[])  

     function handleSubmit()
  {
      if(username==='admin' && password==='admin')
       setVisible(true);
  }

     let  Item_Screen = (  
     <Items />
      )
    return (
            <>
                {
                (isVisible === true) ? Item_Screen :
                    (
                        <View style={styles.container}>
                            <Text style={styles.logo}>Alberta App</Text>
                        <View style={styles.inputView} >
                            <TextInput  
                                style={styles.inputText}
                                placeholder="Username..." 
                                placeholderTextColor="#003f5c"
                                onChangeText={text => setUserName(text)}/>
                            </View>
                     <View style={styles.inputView} >
                     <TextInput  
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..." 
                        placeholderTextColor="#003f5c"
                        onChangeText={text => setPassword(text)}/>
                        </View>
                        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
                            <Text style={styles.loginText}>LOGIN</Text>
                        </TouchableOpacity>
                        </View> 
                    )   
                }
        </>
    )
}
export default LoginScreen



