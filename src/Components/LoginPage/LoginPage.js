import { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
//import Navigation from '../Navigation/Navigation';
import './LoginPage.scss';



function LoginPage(){
    const test ={
        pseudo:'test',
        mdp:'test'
    }

    const [userNickname, setUserNickname] = useState('');
    const [userPassword, setUserPassword] = useState('');
    //const [error, setError] = useState("");

   


    function handleSubmit(e) {
        setUserNickname(e.target.userNickname);
        setUserPassword(e.target.userPassword);
        if(userNickname === test.pseudo && userPassword === test.mdp){
            console.log("Vous pouvez vous loguer")
        }else{
            console.log('Veuillez recommencer')
        }
    console.log(userNickname, userPassword)


        if (userNickname && userPassword){
        setUserNickname('');//on reset les inputs
        setUserPassword('');
    }
    }
    return(

    <div className="loginForm">
        <div>
        
        </div>
        <h1 className="connectionTitle">Connexion</h1>
        <Form onSubmit={handleSubmit} // gere à la fois le "entré" sur l'input et le click sur le bouton 
>
            <Form.Field>
            <label>Nom d'utilisateur</label>
            <input 
            value={userNickname}
            onChange={(e) => setUserNickname(e.target.value)}
            placeholder="Nom d'utilisateur" />
            </Form.Field>
            <Form.Field>
            <label>Mot de passe</label>
            <input
            value={userPassword}              
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Mot de passe" 
            type='password' />
            </Form.Field>
            <Button type='submit'>Se connecter</Button>
        </Form>
  </div>
    )
};


export default LoginPage;