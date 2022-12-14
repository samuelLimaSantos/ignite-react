function Post ({ author, content }) {
  return (
    <>
      <p>PostAuthor: {author}</p>
      <p>{content}</p>
    </>
  )
}

export { Post }