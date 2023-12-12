import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function InvoicePage() {
    const [invoice, setInvoice] = useState()

    const params = useParams()
    useEffect(() => {
        document.body.classList.add('remove-scroll')

        return () => {
            document.body.classList.remove('remove-scroll')
        }
    }, [])
    
    useEffect(() => {
        const orderId = params.id
        if (orderId) {
            setTimeout(() => {
                setInvoice("/remover_pdf_place_holder.pdf")
            }, 2000)
        }
    }, [params])

  return (
      invoice && <object data={invoice} style={{height:"100vh", width:"100%"}}>Invoice</object>
  )
}