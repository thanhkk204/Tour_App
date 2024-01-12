

export default function CalculateAvgRating(reviews) {
  try {
      const totalRating = reviews?.reduce((acc , item )=>{
          return acc + item.rating
  } , 0)
  const avgRating = totalRating === 0 ? '' : (totalRating / reviews?.length).toFixed(1)
    return {
      avgRating,
      totalRating
    }
    
  } catch (error) {
    console.log(error)
  }
}
