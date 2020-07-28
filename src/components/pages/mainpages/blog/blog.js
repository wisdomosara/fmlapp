import React from 'react'
import blog from './blog.module.css'
import {Link} from 'react-router-dom'
import {Footer,Navbar} from '../../navigation'
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'
import BlogComponent from './blog_component'
// import dummydata from './dummydata'
import showmoreimg from './img/Vector 1.png'
import pageurl from '../../../router/url/pageurl'
import {Button} from '../../../utilities'
import {BlogController} from '../../../dataservices' 

const Blog = ({...props}) => {
    // React.useEffect(()=>{function doIt(){!blogStory[0] && dummydata.dummy(setBlogStory); blogStory[0] && BlogController.getAllBlogPosts();}doIt();})
    // function handleSinglePost(index){props.history.push(pageurl.SINGLE_POST_URL,{postIndex:index});}
    const [blogStory,setBlogStory] = React.useState([]);
    React.useEffect(()=>{function doIt(){!blogStory[0] && BlogController.getAllBlogPosts(setBlogStory);}doIt();})
    function handleSinglePost(index){props.history.push(pageurl.SINGLE_POST_URL+`/${index}`);}
    const[inputDetails,setInputDetails] = React.useState({});
    function handleInput(e){setInputDetails({...inputDetails,[e.target.name]:e.target.value});}
    function handleSubmit(e){e.preventDefault();}
    return(
        <ScrollIntoView>
            <Navbar/>
                <div className={blog.blog_qobi}>                    
                    <section className={blog.header_title_qobi}>
                        <div className={blog.main_container_qobi}><h1>The Blog</h1></div>
                        <div className={`${blog.main_container_qobi} ${blog.create_new_qobi}`}>
                            <Link to={pageurl.CREATE_NEW_POST_URL}><button >Create New Blog Post</button></Link>
                        </div>
                    </section>
                    <section>
                        <div className={blog.main_container_qobi}>
                            <div className={blog.stories_qobi}>
                                {blogStory.map((data,index)=>{return(
                                    <BlogComponent key={index} img_src={data.imgSrc} img_alt={data.imgAlt ? data.imgAlt : `No Image`} title={data.title ? data.title : `No Title`} 
                                    description={data.post ? data.post : `No post`} postlink={()=>{handleSinglePost(data._id)}}/>
                                )})}
                            </div>
                            <div className={blog.load_more_qobi}>
                                <Link className={blog.link_qobi}><p>Load More</p><img src={showmoreimg} alt=""/></Link>
                            </div>
                        </div>
                    </section>
                    <section className={blog.subscribe_section_qobi}>
                        <div className={blog.main_container_qobi}>
                            <div className={blog.subcribe_content_qobi}>
                                <div className={blog.subscribe_content_left_qobi}>
                                    <h1>Subscribe to our newsletter</h1><p>Get the latest news from FundMyLaptop</p>
                                </div>
                                <div className={blog.subscribe_content_right_qobi}>
                                <form>
                                    <input placeholder="Enter your email address" name="email" value={inputDetails.email} onChange={(e)=>handleInput(e)}/>
                                    <Button onClick={(e)=>{handleSubmit(e)}} load={false} propsTitle={"Subscribe"}/>
                                </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            <Footer/>
        </ScrollIntoView>
    )
}
export default Blog;