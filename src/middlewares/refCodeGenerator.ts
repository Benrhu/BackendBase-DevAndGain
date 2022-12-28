import userEntity from '../Users/users';
import { IUser } from '../Users/user.interfaces';

const refCodeGenerator = () =>{
  const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

  // Generate random refCode in hexadecimal format
  let refCode = '';
  for (let i = 0; i < 12; i++) {
    // Get a random index from the hexChars array
    let index = Math.floor(Math.random() * hexChars.length);
    // Append the character at the random index to the refCode string
    refCode += hexChars[index];
  }

  return refCode
};

export default refCodeGenerator