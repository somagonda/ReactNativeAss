// import React from 'react';
// import { Text, View, TextInput, FlatList, Button } from 'react-native';
// import Cards from '../../components/Cards';
// import Login from '../Login/LoginScreen';
// import styles from './StyleItems';

// export default class Items extends React.Component {
//     state={
//         id: 1,
//         description:"",
//         amount:0,
//         total:0,
//         isVisible: true,
//     }
//     DATA = [];
    
//     handleSubmit = () => {
//         this.setState({
//             id: this.state.id + 1,
//             description: this.state.description,
//             amount: this.state.amount,
//             total: Number(this.state.total) + Number(this.state.amount)
//         })
//         console.log(this.state);
//         this.DATA.push({id:1 + this.state.id,description:this.state.description, amount: this.state.amount})
    
//     }
//     render(){
        
//         const Item = ({ desc, amount }) => (
//             <Cards desc={desc} amount={amount} />
//         );
//         const renderItem = ({ item }) => (
//             <Item desc={item.description} amount={item.amount}/>
//         );

//         return (
//             <View style={styles.container}>
//                 <Text style={styles.logo}>Total Items: {this.DATA.length} </Text>
//                 <Text style={styles.logo}>Total Amount: {this.state.total} </Text>
//                 <View style={styles.card}>
//                     <View style={styles.inputView} >
//                         <TextInput  
//                             style={styles.inputText}
//                             placeholder="Item Description..." 
//                             placeholderTextColor="#003f5c"
//                             onChangeText={text => this.setState({description:text})}
//                         />
//                     </View>
//                     <View style={styles.inputView} >
//                         <TextInput
//                             keyboardType='numeric'
//                             style={styles.inputText}
//                             placeholder="Amount..." 
//                             placeholderTextColor="#003f5c"
//                             onChangeText={text => this.setState({amount:text})}
//                         />
//                     </View>
//                         <Button title="Submit" onPress={this.handleSubmit}/>
//                 </View>
//                 <FlatList
//                     data={this.DATA}
//                     renderItem={renderItem}
//                     keyExtractor={item => item.id}
//                 />
//             </View>
//         )  
//     }
// }






import React,{useEffect, useState} from 'react';
import { Text, View, TextInput, FlatList, Button } from 'react-native';
import Cards from '../../components/Cards';
import styles from './StyleItems';

function Items()
{ 
    const [id, setid] = useState(0);
    const[description,setdescription] = useState("");
    const [total,settotal]= useState(0);
    const[amount,setamount] = useState(0);
    const [ isVisible,setisVisible]= useState(true)
    
let DATA=[];
  function handleSubmit() 
    {
          setid((pr)=>pr + 1),
          setdescription(description),
          setamount(amount),
          settotal(Number(total) + Number(amount))  
          DATA.push({id:id,description:description,amount:amount})
    }
        
    let Item = ({ desc, amount }) => (
        <Cards desc={desc} amount={amount} />
    );
    const renderItem = () => (
        <Item desc={description} amount={amount}/>
    );


        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Total Items: {id} </Text> 
               <Text style={styles.logo}>Total Amount: {total} </Text> 
                <View style={styles.card}>
                    <View style={styles.inputView} >
                        <TextInput  
                            style={styles.inputText}
                            placeholder="Item Description..." 
                            placeholderTextColor="#003f5c"
                            onChangeText={text => setdescription(text)}
                        />
                    </View>
                    <View style={styles.inputView} >
                        <TextInput
                            keyboardType='numeric'
                            style={styles.inputText}
                            placeholder="Amount..." 
                            placeholderTextColor="#003f5c"
                            onChangeText={(text) => setamount(text)}
                        />
                    </View>
                        <Button title="Submit" onPress={handleSubmit}/>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

        )  
    }

    export default Items;
































// import React,{useEffect, useState} from 'react';
// import { Text, View, TextInput, FlatList, Button } from 'react-native';
// import Cards from '../../components/Cards';
// import styles from './StyleItems';

// export default  function Items() {


//     const[item,setItem]= useState({
//         id: 0,
//         description:"",
//         amount:0,
//         total:0,
//        })



// let DATA = [];

// const handleSubmit= () => {
//     setItem({
//         id:item.id+1,
//         description:item.description,
//         amount:item.amount,
//         total:(+item.amount)+ (+item.total)
//        })
//      DATA.push({id:item.id ,description:item.description, amount: item.amount})

// }

//     const Item = ({ desc, amount }) => (
//         <Cards desc={desc} amount={amount} />
//     );
//     const renderItem = ({ item}) => (
//         <Item desc={item.description} amount={item.amount}/>
//     );

//         return (
//           <View style={styles.container}>
//                 <Text style={styles.logo}>Total items: {item.id} </Text>
//                 <Text style={styles.logo}>Total Amount: {item.total} </Text>
//                 <View style={styles.card}>
//                     <View style={styles.inputView} >
//                         <TextInput  
//                             style={styles.inputText}
//                             placeholder="Item Description..." 
//                             placeholderTextColor="#003f5c"
//                             onChangeText={text => setItem({description:text})}
//                         />
//                     </View>
//                     <View style={styles.inputView} >
//                         <TextInput
//                             keyboardType='numeric'
//                             style={styles.inputText}
//                             placeholder="Amount..." 
//                             placeholderTextColor="#003f5c"
//                             onChangeText={text => setItem({amount:text})}
//                         />
//                     </View>
//                         <Button title="Submit" onPress={handleSubmit}/>
//                 </View>
//                 <FlatList
//                     data={DATA}
//                     renderItem={renderItem}
//                     keyExtractor={item => item.id}
//                 />
//             </View>
//     )
// }

// //export default Items;