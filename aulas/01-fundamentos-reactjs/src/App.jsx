import { Post } from "./Post"

function App() {
  return (
    <>
      <Post 
        author="Samuel" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus natus animi molestias, voluptatem facere exercitationem unde aliquam sit obcaecati ea vero inventore iusto non eum libero cum quas veritatis."
      />
      <Post 
        author="Maria"
        content="Another content"
      />
    </>
  )
}

export default App
