import { getAuth } from "firebase/auth";
import '../config/firebase-config'
import axios from "axios"


const api = async (endpoint, data,method)=>{
    var idToken =  getAuth().currentUser;
    if(idToken) idToken = await idToken.getIdToken();
    if(!idToken) idToken = "bearer";
    const mainUrl = process.env.REACT_APP_BACKEND_URL;
        const instance = axios.create({
            baseURL: mainUrl,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: idToken
            }
        })

        try{
            if(method === 'post'){
                const response = await instance.post(endpoint, data);
                return response;
            }
            else if(method === 'get') {
                const response = await instance.get(endpoint);
                return response;
            }
        }catch(err){
            console.log("error aaya h" + err);
            return {
                data: {
                    success: false
                }
            };
        }

}
export const getBookList = async (clg, sem, branch)=> await api(`/book/booklist/${clg}/${sem}/${branch}`, '', 'get')
export const getBookDetailsById = async (id)=> await api(`/book/bookid/${id}`, '', 'get')
export const postBook = async (json)=> await api(`/book/addbook`, json, 'post')

export const postProject = async (json)=> await api(`/project/addproject`, json, 'post');
export const getFilters = async ()=> await api(`/project/getfilter`, '', 'get')
export const getProjectList = async (filters)=> await api(`/project/projectlist/${filters}`, '', 'get')
export const getProjectDetailsById = async (id)=> await api(`/project/projectid/${id}`, '', 'get')

export const postUser = async (data)=> await api('/user/addUser', data, 'post');
export const postNewUser = async (data)=> await api('/user/addNewUser', data, 'post');
export const getUserDetails = async ()=> await api('/user/userDetail', '', 'get');
export const getUserDetailsUsingid = async (id)=> await api('/user/userDetail/' + id, "", 'get');

