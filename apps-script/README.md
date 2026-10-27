# Booking backend (Google Sheets + Apps Script)

The website's booking form (`/book`) posts each request to a small Apps Script web app. The script:

1. adds a row to the **Bookings** tab of a Google Sheet, with a **Status** dropdown (New → Contacted → Confirmed → Cancelled),
2. emails the Kaarya team the details (hit Reply to answer the visitor directly),
3. emails the visitor a confirmation.

It also rejects invalid requests and silently drops spam bots.

## One-time setup (about 10 minutes)

Use the Google account that should own the bookings, ideally a shared Kaarya account rather than a personal one. Emails are sent from this account.

1. **Create the sheet.** Go to [sheets.new](https://sheets.new) and name it `Kaarya Bookings`.
2. **Open the script editor.** In the sheet, choose **Extensions → Apps Script**.
3. **Paste the code.** Replace everything in `Code.gs` with the contents of [`Code.gs`](Code.gs) from this folder.
4. **Edit the settings** at the top of `Code.gs`:
   - `NOTIFY_EMAILS`: everyone who should get new-booking emails, already set to `info@kaarya.co`; add more as `['info@kaarya.co', 'someone@kaarya.co']`
   - `REPLY_TO`: where visitors' replies should go
   - `PHONE`: Kaarya's phone number, shown in the confirmation email
5. **Set the time zone.** Click **Project Settings** (gear icon), tick **Show "appsscript.json" manifest file**, and replace that file's contents with [`appsscript.json`](appsscript.json).
6. **Run setup once.** Back in `Code.gs`, pick `setup` from the function dropdown and click **Run**. Google asks for permission: choose your account, then **Advanced → Go to project (unsafe) → Allow**. The "unsafe" warning appears because this is your own unverified script, which is expected. A formatted **Bookings** tab appears in the sheet.
7. **Deploy.** Click **Deploy → New deployment**, choose the gear icon → **Web app**, and set:
   - Execute as: **Me**
   - Who has access: **Anyone**

   Click **Deploy** and copy the **Web app URL**, which ends in `/exec`.
8. **Check it.** Open that URL in a browser. You should see `{"ok":true,"service":"kaarya-booking"}`.
9. **Connect the website.** Paste the URL into `site.bookingEndpoint` in [`src/content.js`](../src/content.js), then commit and push. Render redeploys automatically.
10. **Send a test booking** from the live site and check the sheet row and both emails.

## Changing the script later

After editing `Code.gs`, go to **Deploy → Manage deployments → ✏️ Edit**, set **Version: New version**, and click **Deploy**. This keeps the same URL, so the website needs no change. Choosing *New deployment* instead would create a new URL.

## Limits

Gmail accounts can send about **100 emails a day** and Google Workspace accounts about **1,500**. Each booking sends 2, so a free Gmail account covers roughly 50 bookings a day. If the email limit is reached, the booking is still saved to the sheet.
