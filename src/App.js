import React from "react";
import Routes from "./routes";
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports.js'
import { withAuthenticator } from 'aws-amplify-react-native'
Amplify.configure(awsconfig)

const App = () => {
    return(
        <Routes/>
    )
}

export default withAuthenticator(App)
