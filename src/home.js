import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
width: 60%;
height: auto;
margin: 0 15%;
padding: 0 5%;
display: flex;
border: 5px solid gray;
flex-flow: column nowrap;
align-items: center;
`
export default function Home() {
    return (
        <StyledDiv>
            <h2>Specials</h2>
            <p>Everything is on sale! Click order! smiley face smiley face.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu lectus facilisis, ullamcorper tortor a, sagittis diam. Vestibulum id tristique orci, at placerat magna. Nam at tellus diam. Mauris eu nulla lectus. Sed ornare eu risus non pulvinar. Etiam quis aliquet quam. Fusce scelerisque felis dapibus posuere fermentum. Proin cursus dui id ornare efficitur. Vivamus fermentum, nisi a pulvinar pharetra, purus quam rhoncus dui, tincidunt tincidunt augue dui quis ligula. Nunc lacinia, justo sit amet aliquam aliquet, justo velit bibendum est, id ornare mi libero at lectus. Nullam malesuada elementum condimentum. Mauris quis accumsan erat. Pellentesque vel arcu sem.</p>
            <p>Vestibulum metus sem, congue vitae tincidunt non, rutrum vitae lacus. Sed sagittis, augue a condimentum congue, augue urna euismod justo, ac euismod lectus ex quis arcu. Proin a imperdiet lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id arcu congue, dictum mi sed, blandit ligula. Nullam eget luctus ipsum, quis molestie mi. Nunc dictum nisl ac vestibulum consectetur. Praesent eget finibus dolor. Nam lacinia dapibus eleifend. Etiam porttitor turpis et erat vulputate tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque pretium sagittis scelerisque. Mauris imperdiet, ex eget rutrum interdum, mauris metus consequat turpis, at scelerisque dui justo hendrerit velit.</p>
        </StyledDiv>
    )
}
