import { XCircle } from 'phosphor-react';
import {
    ChangeEvent,
    useEffect,
    useState
} from 'react';
import { PropsModalWhatsapp } from '../models/PropsModalWhatsapp';
import style from "./ModalWhatsapp.module.css";

export function ModalWhatsapp({ lista, isActived, setActived }: PropsModalWhatsapp) {
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [url, setUrl] = useState('')

    function submitListtForWhatsapp() {
        const isMobile = navigator.userAgent.match('/Android/i')
                || navigator.userAgent.match('/webOS/i')
                || navigator.userAgent.match('/iPhone/i')
                || navigator.userAgent.match('/iPad/i')
                || navigator.userAgent.match('/iPod/i')
                || navigator.userAgent.match('/BlackBerry/i')
                || navigator.userAgent.match('/Windows Phone/i')
            ? true
            : false


        // checar
        if (isMobile) {
            let target = `whatsapp://send?`

            if (phone !== '') {
                target += `phone=${encodeURIComponent(phone)}&`
            }
            if (message !== '') {
                target += `text=${message}`
            }

            setUrl(target)
        } else {
            let target = `https://api.whatsapp.com/send?`

            if (phone !== '') {
                target += `phone=${encodeURIComponent(phone)}&`
            }
            if (message !== '') {
                target += `text=${message}`
            }

            setUrl(target)
        }
    }

    function handleChangePhoneNumber(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.value.trim()) {
            setPhone(event.target.value)
        } else {
            setPhone('')
        }
    }

    function handleCloseModal() {
        if (isActived) {
            setActived(false)
        } else {
            setActived(true)
        }
    }

    useEffect(() => {
        let concatenarStrings: string = ''

        lista.forEach(item => concatenarStrings += '\n'+item) //encodeURIComponent(item)

        setMessage(concatenarStrings)
    });

    return (
        <div className={style.container}>
            <form
                onSubmit={submitListtForWhatsapp}
                action={url}
                target="_blank"
                className={style.formContainer}
            >
                <div className={style.content}>
                    <label htmlFor="number-whatsapp">Número do WhatsApp</label>
                    <input
                        type="number"
                        name="phone"
                        id="number-whatsapp"
                        placeholder='55 (88) 9.9999-9999'
                        value={phone}
                        onChange={handleChangePhoneNumber}
                        required
                        className={style.phoneInput}
                    />
                    <input 
                        type="hidden" 
                        name="text" 
                        id="text-whatsapp"
                        value={message}
                        className={style.messageInput}
                    />
                </div>
                <button 
                    disabled={phone.length === 13 ? false : true}
                    type="submit"
                >
                    Enviar
                </button>
            </form>
            <div className={style.closedModal}>
                <XCircle 
                    size={48} 
                    style={{cursor: 'pointer'}} 
                    onClick={handleCloseModal}
                />
            </div>
        </div>
    )
}