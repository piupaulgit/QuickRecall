
const Utilities =  { 
    isValidUser(){
        return this.getToken() ? true : false;
    }
}
export default Utilities;