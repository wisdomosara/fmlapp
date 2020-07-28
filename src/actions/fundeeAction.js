import  axios from 'axios'
import {FETCH_FUNDEE_DASHBOARD_INFOS} from '../reducers/types'

let baseURL = 'https://api.fundmylaptop.com';

// Fundee Dashboard 
// const tokenfml=localStorage.getItem('FMLToken')
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWRhOTcyYTdmNTVkMDAxMWU1ZjEwNiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTk1ODAxNzk0LCJleHAiOjE1OTU4ODgxOTR9.Is-tQsbbaLypDNWylO-4JZHq_zdB3zgP-PXa9NW1Xt0'
// console.log(tokenfml , 'heyyy ths stoage local token')

export function  fetchFundeeDashboard  () {
   return dispatch=>{
   
       axios.get(`${baseURL}/api/campaigns/fundeeOverview`,
      { headers:{ Authorization: `Bearer ${token}`}}
      )
      .then(function (response) {
        
        dispatch({
            type:FETCH_FUNDEE_DASHBOARD_INFOS,
            payload:response.data.data
        })
      
      })
      .catch(function (error) {
        console.log('not dispatched',error);
      })
     
        }
    
}