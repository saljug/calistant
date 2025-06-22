# 🎯 Airtable Waitlist Setup (5 minutes)

## ✅ **Why Airtable is Better:**
- 📊 **Beautiful interface** (like Excel but better)
- 🚀 **1,200 signups/month** (vs Netlify's 100)
- 👥 **Team sharing** with co-founders
- 📈 **Better analytics** and filtering
- 📤 **Easy export** to Excel/CSV

---

## 🚀 **Step 1: Create Airtable Account**
1. Go to [airtable.com](https://airtable.com)
2. Sign up for free
3. Create workspace: **"Calistant"**

## 📋 **Step 2: Create Waitlist Base**
1. Click **"Create a base"**
2. Choose **"Start from scratch"**
3. Name it: **"Waitlist"**

## 🔧 **Step 3: Set Up Fields**
**Delete existing fields and create these:**

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Name | Single line text | User's name |
| Email | Email | User's email |
| Country | Single line text | User's country |
| Source | Single line text | How they found you |
| Date | Date and time | Auto-filled |

## 🔑 **Step 4: Get API Credentials**

### **Get Base ID:**
1. Go to [airtable.com/api](https://airtable.com/api)
2. Click your **"Waitlist"** base
3. Copy the **Base ID** (starts with `app...`)

### **Get API Key:**
1. Go to [airtable.com/account](https://airtable.com/account)
2. Click **"Developer hub"**
3. Click **"Personal access tokens"**
4. Click **"Create new token"**
5. **Name**: "Calistant Waitlist"
6. **Scopes**: Check "data.records:write"
7. **Access**: Select your "Waitlist" base
8. Click **"Create token"**
9. **Copy the token** (starts with `pat...`)

### **Get Table Name:**
- Usually **"Table 1"** (check in your Airtable base)

---

## 💻 **Step 5: Update Website Code**

**Replace these 3 values in your code:**

```typescript
// In src/components/WaitlistForm.tsx, replace:
const AIRTABLE_BASE_ID = 'YOUR_BASE_ID_HERE';     // app123abc...
const AIRTABLE_TABLE_NAME = 'Table 1';            // or your table name
const AIRTABLE_API_KEY = 'YOUR_API_KEY_HERE';     // pat123abc...
```

**Example:**
```typescript
const AIRTABLE_BASE_ID = 'appABC123DEF456';
const AIRTABLE_TABLE_NAME = 'Table 1';
const AIRTABLE_API_KEY = 'patABC123.def456ghi789';
```

---

## 🎉 **That's It!**

### **What You Get:**
✅ **Real-time data** in beautiful Airtable interface  
✅ **1,200 free signups/month**  
✅ **Easy filtering/sorting** by country, source, date  
✅ **Team collaboration** with co-founders  
✅ **Export to Excel/CSV** anytime  
✅ **API access** for future automations  

### **How to View Data:**
1. Open your Airtable "Waitlist" base
2. See new signups appear instantly
3. Filter by country: `Country = "Turkey"`
4. Sort by date: newest first
5. Export: Click "..." → "Download CSV"

### **Share with Team:**
1. Click **"Share"** in top-right
2. Add co-founder emails
3. Set permissions (Edit/Comment/Read)

---

## 🔒 **Security Note:**
- Keep your API key secret
- Don't share it publicly
- Only use HTTPS websites (your site is already HTTPS)

---

## 📱 **Test It:**
1. Fill out form on your website
2. Check Airtable - new row should appear!
3. Export data to see it works

**Need help?** Just send me your 3 credentials and I'll update the code for you! 