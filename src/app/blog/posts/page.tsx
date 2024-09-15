import { posts } from "@/app/lib/placeholder-data"
import Post from "@/app/ui/components/posts/Post"

function Page() {
  return (
    <>
    {posts?.map((post)=>(
       <Post key={post.id} {...post}/>
    ))}
    </>
  )
}

export default Page