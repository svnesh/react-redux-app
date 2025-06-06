const SingleProductPage = (product) => {
  return (
    <div className="flex flex-col px-4 gap-4 items-center">
      <img src={product.image}></img>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  )
}

export default SingleProductPage