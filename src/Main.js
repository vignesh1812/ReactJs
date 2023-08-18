import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div className='bg-dark text-white'>
       <div className="content text-center">
            <h1 className="display-4 text-white" id="about">Web devlopment</h1>
            <p>Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
           </div>

           <div className="about text-center" >
            <h3>About us</h3>
            <img src="https://t3.ftcdn.net/jpg/03/38/05/28/360_F_338052826_wxLVTscxLlDJHwg8PARkjxbntA6eaKzN.jpg" alt="About us" height="220px" width="300px"/>
            <p>You don't need to outright say, “our mission is create digital world safe &amp; Smart,” but you should convey the mission of your business in your About Us copy. This is key for attracting talent, as well as leads that have Corporate Social Responsibility (CSR) goals.</p>
           </div>

          <div className="cards row text-center">
            <div className="col card1 hover">
                <h3>HTML</h3>
                <p>The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content.</p>
            </div>
            <div className="col card2 hover">
                <h3>CSS</h3>
                <p>CSS stands for cascading style sheets. In short, CSS is a design language that makes a website look more appealing than just plain or uninspiring pieces of text.</p>
            </div>

            <div className="col card3 hover">
                <h3>JAVASCRIPT</h3>
                <p>JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. </p>
            </div>
          </div>

          {/* <div className="testimonial row text-center">
                <h3 className="display-4">Testimonial</h3>
              <div className="testi col">
                <img src="https://cdn.vox-cdn.com/thumbor/yIoKynT0Jl-zE7yWwzmW2fy04xc=/0x0:706x644/1400x1400/filters:focal(353x322:354x323)/cdn.vox-cdn.com/uploads/chorus_asset/file/13874040/stevejobs.1419962539.png" alt="steve jobs" className="img-fluid" height="200px" width="250px"/>
                 <h3 className="display-6">Steve jobs</h3>
                <p>Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate, inventor, and investor. He was the co-founder, chairman, and CEO of Apple; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and the founder, chairman, and CEO of NeXT. He was a pioneer of the personal computer revolution of the 1970s and 1980s.</p>
                </div>
                <div className="testi col">
                   <img src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg" alt="tim cook" height="250px" width="250px" className="img-fluid"/>
                   <h3 className="display-6">Tim cook</h3>
                   <p>Timothy Donald Cook (born November 1, 1960)[1] is an American business executive who has been the chief executive officer of Apple Inc. since 2011. Cook previously served as the company's chief operating officer under its co-founder Steve Jobs.[2] He is the first CEO of any Fortune 500 company who is openly gay.[3]</p>
                </div>

          </div> */}
           <form id="contactus" className=''> 

            <h3 className="display-6 text-center">Contact Us!</h3>
            <hr/>
            <label for="name" className="text-left">Name :</label> <br/>
            <input type="text" placeholder="Enter your name" id="name"  pattern="{a-z}*" required/><br/>
            <label for="email" className="text-left">Email :</label> <br/>
            <input type="email" placeholder="Enter your Mail id" id="email"  required/> <br/>
            <label for="date">Date:</label><br/>
            <input type="date" name="date" id="date"/><br/>
            <button type="button" className="btn btn-success">Submit</button>
          </form>
  </div>
  )
}

export default Main
