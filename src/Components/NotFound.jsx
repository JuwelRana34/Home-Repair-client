/* eslint-disable react/prop-types */
import { Empty, EmptyImage, EmptyTitle } from 'keep-react'

function NotFound({text}) {
  return (
    <>

<Empty >
      <EmptyImage>
        <img src="https://staticmania.cdn.prismic.io/staticmania/499b23f3-41ed-4bc9-a9eb-43d13779d2f8_Property+1%3DSad+screen_+Property+2%3DSm.svg" alt="404"  />
       
      </EmptyImage>
      <EmptyTitle className="mb-[14px] text-center mt-5">{text}</EmptyTitle>
    </Empty>
    

    </>
  )
}

export default NotFound