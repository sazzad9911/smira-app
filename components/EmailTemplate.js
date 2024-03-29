export const membership=(membership,endDate,name,price,discount,color,msg)=>{
    let savings=(price*discount)/100;
    savings=savings.toFixed(2)
    let newPrice=(price-savings);
    newPrice=newPrice.toFixed(2)
    return `
    <!DOCTYPE html>
    
    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    <style>
            * {
                box-sizing: border-box;
            }
    
            body {
                margin: 0;
                padding: 0;
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }
    
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }
    
            p {
                line-height: inherit
            }
    
            .desktop_hide,
            .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0px;
                overflow: hidden;
            }
    
            @media (max-width:920px) {
                .row-content {
                    width: 100% !important;
                }
    
                .mobile_hide {
                    display: none;
                }
    
                .stack .column {
                    width: 100%;
                    display: block;
                }
    
                .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                }
    
                .desktop_hide,
                .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                }
            }
    
            @media (max-width:768px) {
    
                .row-3 .column-1 .block-10.paragraph_block td.pad,
                .row-3 .column-1 .block-12.paragraph_block td.pad,
                .row-3 .column-1 .block-14.paragraph_block td.pad,
                .row-3 .column-1 .block-16.paragraph_block td.pad,
                .row-3 .column-1 .block-2.paragraph_block td.pad,
                .row-3 .column-1 .block-4.heading_block td.pad,
                .row-3 .column-1 .block-6.paragraph_block td.pad,
                .row-3 .column-1 .block-8.heading_block td.pad {
                    padding: 0 10px !important;
                }
    
                .row-2 .column-1 .block-2.heading_block h1,
                .row-3 .column-1 .block-4.heading_block h1,
                .row-3 .column-1 .block-8.heading_block h1 {
                    font-size: 18px !important;
                }
    
                .row-2 .column-1 .block-3.paragraph_block td.pad>div,
                .row-3 .column-1 .block-10.paragraph_block td.pad>div,
                .row-3 .column-1 .block-12.paragraph_block td.pad>div,
                .row-3 .column-1 .block-14.paragraph_block td.pad>div,
                .row-3 .column-1 .block-16.paragraph_block td.pad>div,
                .row-3 .column-1 .block-2.paragraph_block td.pad>div,
                .row-3 .column-1 .block-6.paragraph_block td.pad>div {
                    font-size: 17px !important;
                }
    
                .row-1 .column-1 .block-1.image_block img {
                    display: inline-block !important;
                }
    
                .row-1 .column-1 .block-1.image_block .alignment {
                    text-align: center !important;
                }
    
                .row-2 .column-1 .block-3.paragraph_block td.pad {
                    padding: 10px !important;
                }
    
                .row-4 .column-1 .block-1.paragraph_block td.pad>div {
                    text-align: left !important;
                    font-size: 16px !important;
                }
    
                .row-4 .column-1 .block-1.paragraph_block td.pad {
                    padding: 50px 15px !important;
                }
    
                .row-3 .column-1 .block-20.paragraph_block td.pad>div {
                    text-align: center !important;
                    font-size: 16px !important;
                }
    
                .row-3 .column-1 .block-20.paragraph_block td.pad {
                    padding: 10px 15px 10px 10px !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: ${color};" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: ${color}; border-radius: 0; color: #000000; width: 900px;" width="900">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:15px;padding-top:15px;width:100%;padding-right:0px;padding-left:0px;">
    <div align="left" class="alignment" style="line-height:10px"><img src="https://i.ibb.co/x7w8br1/SMIRA-LOGO-1.png" style="display: block; height: auto; border: 0; width: 159px; max-width: 100%;" width="159"/></div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: ${color};" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: ${color}; border-radius: 0; color: #000000; width: 900px;" width="900">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:45px;padding-left:60px;padding-right:60px;padding-top:45px;width:100%;">
    <div align="center" class="alignment" style="line-height:10px"><img src="https://i.ibb.co/QkZ2WQq/Splash-Screen-Logo.png" style="display: block; height: auto; border: 0; width: 225px; max-width: 100%;" width="225"/></div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:5px;padding-left:60px;padding-right:60px;text-align:center;width:100%;">
    <h1 style="margin: 0; color: #fff; direction: ltr; font-family: Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif; font-size: 25px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${membership}</span></h1>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:60px;padding-left:60px;padding-right:60px;padding-top:10px;">
    <div style="color:#fff;direction:ltr;font-family:Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif;font-size:25px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:30px;">
    <p style="margin: 0;">Valid till ${endDate}</p>
    </div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; width: 900px;" width="900">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-left:60px;padding-right:60px;padding-top:50px;">
    <div style="color:#000000;direction:ltr;font-family:Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif;font-size:25px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:30px;">
    <p style="margin: 0;">Welcome to Smira Club. </p>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:20px;">
    <h1 style="margin: 0; color: #000000; direction: ltr; font-family: Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif; font-size: 25px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${name}</span></h1>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-left:60px;padding-right:60px;padding-top:20px;">
    <div style="color:#000000;direction:ltr;font-family:Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif;font-size:25px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:30px;">
    <p style="margin: 0;">We’re thrilled to see you here!</p>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px;">
    <h1 style="margin: 0; color: #000000; direction: ltr; font-family: Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif; font-size: 25px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Congratulations!</span></h1>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px;">
    <div style="color:#000000;direction:ltr;font-family:Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif;font-size:25px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:30px;">
    <p style="margin: 0;">On savings: ₹${savings}</p>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-12" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px;">
    <div style="color:#000000;direction:ltr;font-family:Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif;font-size:25px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:30px;">
    <p style="margin: 0;">Original price: ₹${price}</p>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-14" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px;">
    <div style="color:#000000;direction:ltr;font-family:Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif;font-size:25px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:30px;">
    <p style="margin: 0;">With flat: ${discount}% Discount</p>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-16" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px;">
    <div style="color:#000000;direction:ltr;font-family:Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif;font-size:25px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:30px;">
    <p style="margin: 0;">Membership price: ₹${newPrice}</p>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-20" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <tr>
    <td class="pad" style="padding-bottom:60px;padding-left:10px;padding-right:10px;padding-top:160px;">
    <div style="color:#737373;direction:ltr;font-family:Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif;font-size:23px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:27.599999999999998px;">
    <p style="margin: 0;">${msg}</p>
    </div>
    </td>
    </tr>
    <td class="pad" style="padding-bottom:60px;padding-left:10px;padding-right:10px;padding-top:160px;">
    <div style="color:#737373;direction:ltr;font-family:Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif;font-size:23px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:27.599999999999998px;">
    <p style="margin: 0;">We’re confident that membership will help you save more money while enjoying the luxuries of our services.</p>
    </div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ebebeb;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-radius: 0; color: #000000; background-color: #ebebeb; width: 900px;" width="900">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:50px;padding-top:50px;">
    <div style="color:#737373;direction:ltr;font-family:Source Sans Pro, Tahoma, Verdana, Segoe, sans-serif;font-size:23px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:left;mso-line-height-alt:27.599999999999998px;">
    <p style="margin: 0; margin-bottom: 15px;"><strong>Smira Sevices Pvt. Ltd.</strong></p>
    <p style="margin: 0; margin-bottom: 15px;">Ranjit Studio Compound, Ground & 1st Floor, M-Block, Plot No. 115, Dada Saheb Phalke Marg, Opp. Bharatkshetra, Hindmata, Dadar East, Mumbai, Maharashtra 400014</p>
    <p style="margin: 0; margin-bottom: 15px;"><strong>Contact No.</strong></p>
    <p style="margin: 0; margin-bottom: 15px;">9833733477</p>
    <p style="margin: 0;">9833733977</p>
    </div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table><!-- End -->
    </body>
    </html>`
}
export const bookingRequest=(name,address,rooms,guests,kids,check_in,check_out,veg,non_veg)=>{
    return`
    
    <!DOCTYPE html>
    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head><title></title><meta content="text/html; charset=utf-8" http-equiv="Content-Type"/><meta content="width=device-width,initial-scale=1" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><style>
    *{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}@media (max-width:920px){.row-content{width:100%!important}.mobile_hide{display:none}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}}@media (max-width:768px){.row-3 .column-1 .block-10.paragraph_block td.pad>div,.row-3 .column-1 .block-16.paragraph_block td.pad>div,.row-3 .column-1 .block-22.paragraph_block td.pad>div,.row-3 .column-1 .block-24.paragraph_block td.pad>div,.row-3 .column-1 .block-4.paragraph_block td.pad>div{font-size:17px!important}.row-3 .column-1 .block-10.paragraph_block td.pad,.row-3 .column-1 .block-16.paragraph_block td.pad,.row-3 .column-1 .block-22.paragraph_block td.pad,.row-3 .column-1 .block-24.paragraph_block td.pad,.row-3 .column-1 .block-4.paragraph_block td.pad,.row-3 .column-1 .block-6.heading_block td.pad{padding:0 10px!important}.row-3 .column-1 .block-6.heading_block h1{font-size:18px!important}.row-3 .column-1 .block-28.paragraph_block td.pad>div{text-align:center!important;font-size:16px!important}.row-3 .column-1 .block-28.paragraph_block td.pad{padding:10px 15px 10px 10px!important}.row-4 .column-1 .block-1.paragraph_block td.pad>div{text-align:left!important;font-size:16px!important}.row-4 .column-1 .block-1.paragraph_block td.pad{padding:50px 15px!important}}
    </style></head><body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fc444b" width="100%">
    <tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fc444b;border-radius:0;color:#000;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-bottom:15px;padding-top:15px;width:100%;padding-right:0;padding-left:0"><div align="left" class="alignment" style="line-height:10px"><img src="https://i.ibb.co/x7w8br1/SMIRA-LOGO-1.png" style="display:block;height:auto;border:0;width:159px;max-width:100%" width="159"/></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f6f6f6" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-radius:0;color:#000;background-color:#f6f6f6;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-bottom:45px;padding-left:60px;padding-right:60px;padding-top:45px;width:100%"><div align="center" class="alignment" style="line-height:10px"><img src="https://i.ibb.co/FnWjpfg/Received.png" style="display:block;height:auto;border:0;width:180px;max-width:100%" width="180"/></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-bottom:55px;padding-left:60px;padding-right:60px;text-align:center;width:100%"><h1 style="margin:0;color:#a6a6a6;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:25px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0">
    <span class="tinyMce-placeholder">Request Received</span></h1></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-radius:0;color:#000;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
    <tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:25px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0"><span class="tinyMce-placeholder">${name}</span></h1></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:20px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">${address}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-6" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0">
    <span class="tinyMce-placeholder">Booking Details</span></h1></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-8" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">No. of Rooms: ${rooms}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-10" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Total No. of Guests: ${guests}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-12" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:25px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:30px"><p style="margin:0">Total No. of Kids: ${kids}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-14" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0"><span class="tinyMce-placeholder">Reserved Dates</span></h1></td>
    </tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-16" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Check-in: ${check_in}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-18" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Check-out: ${check_out}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-20" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0">Food(Unlimited Breakfast & Dinner)</h1></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-22" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Veg: ${veg}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-24" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Non-Veg: ${non_veg}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-28" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-bottom:60px;padding-left:10px;padding-right:10px;padding-top:160px"><div style="color:#737373;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:23px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left;mso-line-height-alt:27.599999999999998px"><p style="margin:0;margin-bottom:16px">Please wait for a booking confirmation email for your booking status.</p><p style="margin:0">If you have any inquiries, please do not hesitate to contact us.</p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#ebebeb" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-radius:0;color:#000;background-color:#ebebeb;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-bottom:50px;padding-top:50px"><div style="color:#737373;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:23px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left;mso-line-height-alt:27.599999999999998px"><p style="margin:0;margin-bottom:15px"><strong>Smira Sevices Pvt. Ltd.</strong></p><p style="margin:0;margin-bottom:15px">Ranjit Studio Compound, Ground & 1st Floor, M-Block, Plot No. 115, Dada Saheb Phalke Marg, Opp. Bharatkshetra, Hindmata, Dadar East, Mumbai, Maharashtra 400014</p><p style="margin:0;margin-bottom:15px"><strong>Contact No.</strong></p><p style="margin:0;margin-bottom:15px">9833733477</p><p style="margin:0">9833733977</p></div></td></tr></table></td></tr></tbody></table></td></tr>
    </tbody></table></td></tr></tbody></table><!-- End --></body></html>
    `
}
export const bookingConfirm=(name,address,rooms,guests,kids,check_in,check_out,veg,non_veg)=>{
    return`
    
    <!DOCTYPE html>
    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head><title></title><meta content="text/html; charset=utf-8" http-equiv="Content-Type"/><meta content="width=device-width,initial-scale=1" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><style>
    *{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}@media (max-width:920px){.row-content{width:100%!important}.mobile_hide{display:none}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}}@media (max-width:768px){.row-3 .column-1 .block-10.paragraph_block td.pad>div,.row-3 .column-1 .block-16.paragraph_block td.pad>div,.row-3 .column-1 .block-22.paragraph_block td.pad>div,.row-3 .column-1 .block-24.paragraph_block td.pad>div,.row-3 .column-1 .block-4.paragraph_block td.pad>div{font-size:17px!important}.row-3 .column-1 .block-10.paragraph_block td.pad,.row-3 .column-1 .block-16.paragraph_block td.pad,.row-3 .column-1 .block-22.paragraph_block td.pad,.row-3 .column-1 .block-24.paragraph_block td.pad,.row-3 .column-1 .block-4.paragraph_block td.pad,.row-3 .column-1 .block-6.heading_block td.pad{padding:0 10px!important}.row-3 .column-1 .block-6.heading_block h1{font-size:18px!important}.row-3 .column-1 .block-28.paragraph_block td.pad>div{text-align:center!important;font-size:16px!important}.row-3 .column-1 .block-28.paragraph_block td.pad{padding:10px 15px 10px 10px!important}.row-4 .column-1 .block-1.paragraph_block td.pad>div{text-align:left!important;font-size:16px!important}.row-4 .column-1 .block-1.paragraph_block td.pad{padding:50px 15px!important}}
    </style></head><body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fc444b" width="100%">
    <tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fc444b;border-radius:0;color:#000;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-bottom:15px;padding-top:15px;width:100%;padding-right:0;padding-left:0"><div align="left" class="alignment" style="line-height:10px"><img src="https://i.ibb.co/x7w8br1/SMIRA-LOGO-1.png" style="display:block;height:auto;border:0;width:159px;max-width:100%" width="159"/></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f6f6f6" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-radius:0;color:#000;background-color:#f6f6f6;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-bottom:45px;padding-left:60px;padding-right:60px;padding-top:45px;width:100%"><div align="center" class="alignment" style="line-height:10px"><img src="https://i.ibb.co/k8Qxr8d/Approved.png" style="display:block;height:auto;border:0;width:180px;max-width:100%" width="180"/></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-bottom:55px;padding-left:60px;padding-right:60px;text-align:center;width:100%"><h1 style="margin:0;color:green;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:25px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0">
    <span class="tinyMce-placeholder">Booking Confirmed</span></h1></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-radius:0;color:#000;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
    <tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:25px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0"><span class="tinyMce-placeholder">${name}</span></h1></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:20px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">${address}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-6" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0">
    <span class="tinyMce-placeholder">Booking Details</span></h1></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-8" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">No. of Rooms: ${rooms}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-10" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Total No. of Guests: ${guests}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-12" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:25px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:30px"><p style="margin:0">Total No. of Kids: ${kids}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-14" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0"><span class="tinyMce-placeholder">Reserved Dates</span></h1></td>
    </tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-16" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Check-in: ${check_in}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-18" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Check-out: ${check_out}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-20" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0">Food(Unlimited Breakfast & Dinner)</h1></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-22" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Veg: ${veg}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-24" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Non-Veg: ${non_veg}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-28" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-bottom:60px;padding-left:10px;padding-right:10px;padding-top:160px"><div style="color:#737373;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:23px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left;mso-line-height-alt:27.599999999999998px"><p style="margin:0;margin-bottom:16px">Please wait for a booking confirmation email for your booking status.</p><p style="margin:0">If you have any inquiries, please do not hesitate to contact us.</p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#ebebeb" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-radius:0;color:#000;background-color:#ebebeb;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-bottom:50px;padding-top:50px"><div style="color:#737373;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:23px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left;mso-line-height-alt:27.599999999999998px"><p style="margin:0;margin-bottom:15px"><strong>Smira Sevices Pvt. Ltd.</strong></p><p style="margin:0;margin-bottom:15px">Ranjit Studio Compound, Ground & 1st Floor, M-Block, Plot No. 115, Dada Saheb Phalke Marg, Opp. Bharatkshetra, Hindmata, Dadar East, Mumbai, Maharashtra 400014</p><p style="margin:0;margin-bottom:15px"><strong>Contact No.</strong></p><p style="margin:0;margin-bottom:15px">9833733477</p><p style="margin:0">9833733977</p></div></td></tr></table></td></tr></tbody></table></td></tr>
    </tbody></table></td></tr></tbody></table><!-- End --></body></html>
    `
}
export const bookingReject=(name,address,rooms,guests,kids,check_in,check_out,veg,non_veg)=>{
    return`
    
    <!DOCTYPE html>
    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head><title></title><meta content="text/html; charset=utf-8" http-equiv="Content-Type"/><meta content="width=device-width,initial-scale=1" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><style>
    *{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}@media (max-width:920px){.row-content{width:100%!important}.mobile_hide{display:none}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}}@media (max-width:768px){.row-3 .column-1 .block-10.paragraph_block td.pad>div,.row-3 .column-1 .block-16.paragraph_block td.pad>div,.row-3 .column-1 .block-22.paragraph_block td.pad>div,.row-3 .column-1 .block-24.paragraph_block td.pad>div,.row-3 .column-1 .block-4.paragraph_block td.pad>div{font-size:17px!important}.row-3 .column-1 .block-10.paragraph_block td.pad,.row-3 .column-1 .block-16.paragraph_block td.pad,.row-3 .column-1 .block-22.paragraph_block td.pad,.row-3 .column-1 .block-24.paragraph_block td.pad,.row-3 .column-1 .block-4.paragraph_block td.pad,.row-3 .column-1 .block-6.heading_block td.pad{padding:0 10px!important}.row-3 .column-1 .block-6.heading_block h1{font-size:18px!important}.row-3 .column-1 .block-28.paragraph_block td.pad>div{text-align:center!important;font-size:16px!important}.row-3 .column-1 .block-28.paragraph_block td.pad{padding:10px 15px 10px 10px!important}.row-4 .column-1 .block-1.paragraph_block td.pad>div{text-align:left!important;font-size:16px!important}.row-4 .column-1 .block-1.paragraph_block td.pad{padding:50px 15px!important}}
    </style></head><body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fc444b" width="100%">
    <tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fc444b;border-radius:0;color:#000;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-bottom:15px;padding-top:15px;width:100%;padding-right:0;padding-left:0"><div align="left" class="alignment" style="line-height:10px"><img src="https://i.ibb.co/x7w8br1/SMIRA-LOGO-1.png" style="display:block;height:auto;border:0;width:159px;max-width:100%" width="159"/></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f6f6f6" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-radius:0;color:#000;background-color:#f6f6f6;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-bottom:45px;padding-left:60px;padding-right:60px;padding-top:45px;width:100%"><div align="center" class="alignment" style="line-height:10px"><img src="https://i.ibb.co/FxV11g5/Reject.png" style="display:block;height:auto;border:0;width:180px;max-width:100%" width="180"/></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-bottom:55px;padding-left:60px;padding-right:60px;text-align:center;width:100%"><h1 style="margin:0;color:red;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:25px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0">
    <span class="tinyMce-placeholder">Booking Not Confirmed</span></h1></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-radius:0;color:#000;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%">
    <tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:25px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0"><span class="tinyMce-placeholder">${name}</span></h1></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:20px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">${address}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-6" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0">
    <span class="tinyMce-placeholder">Booking Details</span></h1></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-8" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">No. of Rooms: ${rooms}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-10" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Total No. of Guests: ${guests}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-12" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:25px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:30px"><p style="margin:0">Total No. of Kids: ${kids}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-14" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0"><span class="tinyMce-placeholder">Reserved Dates</span></h1></td>
    </tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-16" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Check-in: ${check_in}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-18" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Check-out: ${check_out}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="heading_block block-20" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;text-align:center;width:100%;padding-top:50px"><h1 style="margin:0;color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0">Food(Unlimited Breakfast & Dinner)</h1></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-22" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Veg: ${veg}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-24" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-left:60px;padding-right:60px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:22px;font-weight:400;letter-spacing:0;line-height:120%;text-align:center;mso-line-height-alt:26.4px"><p style="margin:0">Non-Veg: ${non_veg}</p></div></td></tr></table><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-28" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-bottom:60px;padding-left:10px;padding-right:10px;padding-top:160px"><div style="color:#737373;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:23px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left;mso-line-height-alt:27.599999999999998px"><p style="margin:0;margin-bottom:16px">Please wait for a booking confirmation email for your booking status.</p><p style="margin:0">If you have any inquiries, please do not hesitate to contact us.</p></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#ebebeb" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;border-radius:0;color:#000;background-color:#ebebeb;width:900px" width="900"><tbody><tr><td class="column column-1" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="paragraph_block block-1" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word" width="100%"><tr><td class="pad" style="padding-bottom:50px;padding-top:50px"><div style="color:#737373;direction:ltr;font-family:Source Sans Pro,Tahoma,Verdana,Segoe,sans-serif;font-size:23px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left;mso-line-height-alt:27.599999999999998px"><p style="margin:0;margin-bottom:15px"><strong>Smira Sevices Pvt. Ltd.</strong></p><p style="margin:0;margin-bottom:15px">Ranjit Studio Compound, Ground & 1st Floor, M-Block, Plot No. 115, Dada Saheb Phalke Marg, Opp. Bharatkshetra, Hindmata, Dadar East, Mumbai, Maharashtra 400014</p><p style="margin:0;margin-bottom:15px"><strong>Contact No.</strong></p><p style="margin:0;margin-bottom:15px">9833733477</p><p style="margin:0">9833733977</p></div></td></tr></table></td></tr></tbody></table></td></tr>
    </tbody></table></td></tr></tbody></table><!-- End --></body></html>
    `
}