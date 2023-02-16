import { Button } from '@mui/material'
import './Contacts.scss'

type Props = {}
const Contacts = (props: Props) => {
    return (
        <div className="contacts-page">
            <h1 className="contacts-header">Contacts</h1>
            <p className="contacts-text">
                Have a question, a comment? Want to collaborate in some way?
                Just have something nice to say? I’d love to hear from you!
                Shoot me a message below and I’ll be sure to get back to you as
                soon as I can. Thanks!
            </p>
            <ul className="contacts-list">
                <li className="contacts-list-item">
                    <span className="contacts-list-item-way">Adress:</span>123
                    Beverly Hill, New York, USA
                </li>
                <li className="contacts-list-item">
                    <span className="contacts-list-item-way">Phone:</span>0123
                    456 789
                </li>
                <li className="contacts-list-item">
                    <span className="contacts-list-item-way">Email:</span>
                    Gen@mail.com
                </li>
            </ul>
            <form action="">
                <div className='input-fields'>
                    <input className="input-field" type="text" placeholder='Name*'/>
                    <input className="input-field" type="email" placeholder='Email*'/>
                    <input className="input-field" type="text" placeholder='Subject'/>
                </div>
                <textarea className='text-area' name="" placeholder='Type your message...'></textarea>
                <Button type="submit" className="form-send-btn">Send</Button>
            </form>
        </div>
    )
}
export default Contacts
