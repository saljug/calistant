// Multiple waitlist collection providers
// Choose the one that fits your needs best

export interface WaitlistData {
  name: string;
  email: string;
  country: string;
  source: string;
  variant: string;
  timestamp: string;
}

// 1. NETLIFY FORMS (Already implemented in WaitlistForm.tsx)
// ✅ Free: 100 submissions/month
// ✅ Built-in spam protection
// ✅ Email notifications
export const submitToNetlify = async (data: WaitlistData): Promise<boolean> => {
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'waitlist',
        ...data
      }).toString()
    });
    return response.ok;
  } catch (error) {
    console.error('Netlify submission error:', error);
    return false;
  }
};

// 2. GOOGLE SHEETS (requires Apps Script setup)
// ✅ Free: Unlimited submissions
// ✅ Real-time data in Google Sheets
// ⚠️ Requires initial setup (see instructions below)
export const submitToGoogleSheets = async (data: WaitlistData): Promise<boolean> => {
  try {
    // Replace YOUR_SCRIPT_URL with your Google Apps Script URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error('Google Sheets submission error:', error);
    return false;
  }
};

// 3. FORMSPREE
// ✅ Free: 50 submissions/month
// ✅ No backend required
// ✅ Email notifications
export const submitToFormspree = async (data: WaitlistData): Promise<boolean> => {
  try {
    // Replace YOUR_FORM_ID with your Formspree form ID
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return response.ok;
  } catch (error) {
    console.error('Formspree submission error:', error);
    return false;
  }
};

// 4. AIRTABLE
// ✅ Free: 1,200 records/month
// ✅ Better interface than Google Sheets
// ✅ Built-in API
export const submitToAirtable = async (data: WaitlistData): Promise<boolean> => {
  try {
    const response = await fetch(`https://api.airtable.com/v0/YOUR_BASE_ID/YOUR_TABLE_NAME`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        records: [{
          fields: {
            Name: data.name,
            Email: data.email,
            Country: data.country,
            Source: data.source,
            Variant: data.variant,
            Timestamp: data.timestamp
          }
        }]
      })
    });
    return response.ok;
  } catch (error) {
    console.error('Airtable submission error:', error);
    return false;
  }
};

// 5. MULTIPLE PROVIDERS (for redundancy)
export const submitToMultipleProviders = async (data: WaitlistData): Promise<boolean> => {
  const results = await Promise.allSettled([
    submitToNetlify(data),
    // submitToGoogleSheets(data),
    // submitToFormspree(data),
  ]);
  
  // Return true if at least one provider succeeded
  return results.some(result => result.status === 'fulfilled' && result.value === true);
};

/* 
SETUP INSTRUCTIONS:

1. NETLIFY FORMS (RECOMMENDED - EASIEST):
   - Already implemented! Just deploy to Netlify/Vercel
   - View submissions in Netlify dashboard
   - Free: 100 submissions/month

2. GOOGLE SHEETS SETUP:
   a) Create a Google Sheet with columns: Name, Email, Country, Source, Variant, Timestamp
   b) Go to Extensions > Apps Script
   c) Paste this code:
   
   ```javascript
   function doPost(e) {
     const sheet = SpreadsheetApp.getActiveSheet();
     const data = JSON.parse(e.postData.contents);
     
     sheet.appendRow([
       data.name,
       data.email, 
       data.country,
       data.source,
       data.variant,
       data.timestamp
     ]);
     
     return ContentService
       .createTextOutput(JSON.stringify({success: true}))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
   
   d) Deploy as web app (Execute as: Me, Access: Anyone)
   e) Copy the script URL and replace YOUR_SCRIPT_ID above

3. FORMSPREE SETUP:
   a) Go to formspree.io and create account
   b) Create new form
   c) Copy form ID and replace YOUR_FORM_ID above

4. AIRTABLE SETUP:
   a) Create Airtable base with fields: Name, Email, Country, Source, Variant, Timestamp
   b) Get API key from account settings
   c) Replace YOUR_BASE_ID, YOUR_TABLE_NAME, YOUR_API_KEY above
*/ 