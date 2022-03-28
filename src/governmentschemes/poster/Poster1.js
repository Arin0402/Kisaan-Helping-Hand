import React from 'react'
import './poster1.css'
import pic from '../poster/randomimage.jpg'
const poster1 = () => {
  return (
    <div className="mainborder">
        <div className="heading">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus magni rerum praesentium.</h1>

        </div>
        <div className="block1">
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione rem earum alias?</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, assumenda praesentium minus eum dignissimos voluptatum enim dolorum amet eos pariatur beatae saepe, repudiandae totam vero autem omnis adipisci voluptatem cupiditate. Expedita quia non voluptate autem ea, impedit iure saepe unde sed. Blanditiis, doloremque nemo! Sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, numquam nemo. Velit officia numquam est quasi a magni. Cum accusantium pariatur suscipit laborum reiciendis laudantium et possimus doloremque temporibus quis labore numquam voluptatibus, repellat impedit consequuntur minus, eligendi eaque sapiente unde ipsam molestias harum praesentium? Reiciendis, eligendi possimus recusandae consequatur voluptatibus architecto quia cupiditate facere itaque rerum! Reprehenderit eius dolorum consequatur ipsum quam ducimus labore rem cupiditate?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, maiores! Fugit laborum explicabo suscipit ad commodi, culpa mollitia ea, officia consequuntur praesentium possimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corrupti reprehenderit enim animi consequuntur. Molestiae beatae voluptate laboriosam. Libero hic id architecto inventore?
            </p>
        </div>

        <div className="listblock">
            <div className="lists">
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error vel quo ratione?</h4>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus doloremque adipisci.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus doloremque adipisci.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus doloremque adipisci.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus doloremque adipisci.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus doloremque adipisci.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus doloremque adipisci.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus doloremque adipisci.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi delectus doloremque adipisci.</li>
                </ul>
            </div>
            <img src={pic} alt="" />
        </div>

        <div className="imagesblock">
            <img src={pic} alt="" />
            <p>image1</p>
            <img src={pic} alt="" />
            <p>image2</p>
            <img src={pic} alt="" />
            <p>image3</p>
        </div>
        <div className="imageandtable">
            <img src={pic}alt="" />
            <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
        </div>
    </div>
  )
}

export default poster1