import { createStackNavigator, createAppContainer } from "react-navigation"; 
import Home from '../views/home';
import Add from '../views/add';
import Login from '../views/login';



const AppNavigator = createStackNavigator({
    Home,
    Add,
    Login
  },
);

const AppContainer = createAppContainer(AppNavigator);




export default AppContainer
