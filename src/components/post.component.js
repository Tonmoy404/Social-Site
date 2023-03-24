import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function Post(props) {
	const [posts, setPosts] = useState([]);

    const success = () => {
        toast.success("Successfully saved")
    };

    const error= ()=>{
        toast.error("Deleted Succesfully");
    }

    const api = 'https://jsonplaceholder.typicode.com/posts'

	useEffect(() => {
		async function getPost() {
			try {
				const res = await axios.get(
					`${api}`
				);
				console.log(res);
				setPosts(res.data);
			} catch (err) {
				console.log(err);
				alert("An Error Ocurred");
			}
		}
		getPost();
	}, []);

	const handleAdd = async (postId) => {
		try {
            console.log("tonmoy")
			const response = await axios.post("https://jsonplaceholder.typicode.com/posts",{ title: "New Post Added" });
			const allPost = [response.data, ...posts];
			console.log(allPost);
			setPosts(allPost);
            success();
		} catch (err) {
			console.log(err);
		}
	};

    const handleUpdate = async(postId)=>{
        try{
           
            const allPost = [...posts];
            const res = await axios.put(`${api}/${postId}`, {title: 'Tonmoy'});
            console.log(res);
            const newPost = allPost.find(post => post.id === postId);
            newPost.title = res.data.title;
            console.log(allPost);
            setPosts(allPost);
 
        }
        catch(err){
            console.log(err);
        }
    }

    const handleDelete = async(postId)=>{
        try{
            await axios.delete(`${api}/${postId}`);

            const leftPost = posts.filter(post => post.id != postId);
            setPosts(leftPost);
            error();
        }
        catch(err){
            console.log(err);
        }
    }

	return (
		<ul className="list-group">
			<button className="btn btn-outline-primary" onClick={handleAdd} >
				Add Post
			</button>
			{posts.map((post) => (
				<React.Fragment>
					<li className="list-group-item" key={post.id}>
						{post.title}
						<button className="btn btn-outline-dark mx-2" onClick={()=>handleUpdate(post.id)}>Update</button>
                        <button className="btn btn-outline-danger mx-2" onClick={()=>handleDelete(post.id)}>Delete</button>
                        
					</li>
				</React.Fragment>
			))}
		</ul>
	);
}

export default Post;
