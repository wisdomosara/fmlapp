import React from 'react';
import pageurl from '../../../router/url/pageurl'
import {withRouter,Link} from 'react-router-dom'
import {Navbar,Footer} from '../../navigation'
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'
import blog from './blog.module.css'
import {BlogController} from '../../../dataservices' 
import {Button,Status} from '../../../utilities'
import TermsAndCondition from './termsandcondition'

const CreateBlogPost = ({...props}) => {
const[isStatus,setIsStatus]=React.useState(false);const[isRequested,setIsRequested]=React.useState(false);
const[isLoading,setIsLoading]=React.useState(false);
const[inputDetails,setInputDetails] = React.useState({article_title:"",article_description:"",article_post:"",article_img_src:"",article_img_alt:"blog_post"});
const[inputError,setInputError] = React.useState({});
const[showAgreeTC,setShowAgreeTC] = React.useState(false);
const[agreeTC,setAgreeTC] = React.useState(false);
function handleForm(e){setInputDetails({...inputDetails,[e.target.name]:e.target.value});}
function handleSubmit(e){e.preventDefault();
    if(BlogController.validate(inputDetails,setInputError)){
        BlogController.createBlogPost(inputDetails,setIsStatus,setIsRequested,setIsLoading,setInputError,inputError);
    }
}
function handleUpload(e){try{const image = e.target.files[0];setInputDetails({...inputDetails,'article_img_src':`${image}`});}catch(error){console.log(error.message);}}    


return(<ScrollIntoView><Navbar/>
    {isRequested && <Status closeStatus={()=>{setIsRequested(false);setIsLoading(false);isStatus && window.open(pageurl.CREATE_NEW_POST_URL,'_self')}} status_message={isStatus ? "Post Submitted Successfully" : "Post Not Submitted"} />}
    <div className={blog.create_blog_post_qobi}>
        {showAgreeTC&&<TermsAndCondition agree_btn={()=>{setShowAgreeTC(!showAgreeTC);setAgreeTC(true)}} cancel_btn={()=>{setShowAgreeTC(!showAgreeTC);setAgreeTC(false)}}/>}
         <div className={blog.main_container_qobi}>
            <div className={blog.create_blog_post_container_qobi}>
                <div className={blog.create_blog_post_header_qobi}><h1>Create A Blog Post</h1><p>Share your story with the world</p></div>
                <div className={blog.create_blog_post_form_qobi}>
                    <form><label>Title</label>
                        <input type="text" placeholder="Enter Post Title" name="article_title" value={inputDetails.article_title} onChange={(e)=>{handleForm(e)}} required />
                        <p>{inputError.article_title}</p>
                        <label>Description</label><input type="text" placeholder="Enter Post Description" name="article_description" value={inputDetails.article_description} onChange={(e)=>{handleForm(e)}} required />
                        <p>{inputError.article_description}</p>
                        <label>Post</label><textarea placeholder="Write Post Here" name="article_post" value={inputDetails.article_post} onChange={(e)=>{handleForm(e)}} required />
                        <p>{inputError.article_post}</p>
                        <label>Upload Post Image</label><input type="file" placeholder="Upload Image" name="image_upload" accept="image/*" required onChange={(e)=>handleUpload(e)}></input>
                        <p>{inputError.article_img_src}</p>
                        <span style={{display:"flex"}}>
                            <input type="checkbox" checked={agreeTC} value={agreeTC} onChange={()=>setAgreeTC(!agreeTC)} required /><p style={{fontWeight:"bold",color:"#000"}}>I Agree to 
                            <span onClick={()=>{setShowAgreeTC(!showAgreeTC)}} style={{color:"#FB405C",cursor:"pointer"}}>&nbsp;FundMyLaptop Terms and Conditions</span></p>
                        </span>
                        <Button load={isLoading} propsTitle={"Submit Post"} onClick={(e)=>{handleSubmit(e)}}></Button>
                        <div style={{padding:"30px 0"}}><Link to={pageurl.BLOG_PAGE_URL}>Back To Blog Page</Link></div>
                    </form>
                </div>
            </div>
        </div> 
    </div>
    <Footer/></ScrollIntoView>)}
    
export default withRouter(CreateBlogPost);