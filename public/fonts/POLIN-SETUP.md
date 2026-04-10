# 🎨 מדריך העלאת פונט פולין לאתר ESPRESSIMO

## 📋 רשימת קבצים נדרשים

לאחר שהורדת את פונט פולין, תצטרך להעלות את הקבצים הבאים לתיקייה זו (`/public/fonts/`):

```
/public/fonts/
├── Polin-Light.woff2      (משקל 300 - קל)
├── Polin-Regular.woff2    (משקל 400 - רגיל) ⭐ הכי חשוב
├── Polin-Medium.woff2     (משקל 500 - בינוני)
└── Polin-Bold.woff2       (משקל 700 - מודגש) ⭐ הכי חשוב
```

**💡 טיפ:** אם יש לך רק TTF או OTF, המר אותם ל-WOFF2 כאן:
- https://cloudconvert.com/ttf-to-woff2
- https://everythingfonts.com/ttf-to-woff2

---

## 📥 איפה להוריד את פונט פולין?

### אופציה 1: Alefalefalef (רשמי) ⭐
1. גש ל-[https://www.alefalefalef.co.il](https://www.alefalefalef.co.il)
2. חפש "פולין" או "Polin"
3. רכוש/הורד את הפונט
4. הורד בפורמט TTF/OTF/WOFF2

### אופציה 2: Google Fonts (חינמי - אם זמין)
לפעמים פונטים של Alefalefalef זמינים ב-Google Fonts בגרסת Open Source.
חפש "Polin" או "Alefalefalef" ב-[https://fonts.google.com](https://fonts.google.com)

### אופציה 3: CDN (זמני לבדיקה)
אם רק רוצה לנסות איך הפונט נראה, אפשר להשתמש ב-CDN זמני.

---

## ⚙️ הוראות התקנה צעד-אחר-צעד

### ✅ שלב 1: העלאת הקבצים
1. העתק את קבצי הפונט (Polin-*.woff2) לתיקייה `/public/fonts/`
2. וודא שהשמות תואמים בדיוק:
   - `Polin-Light.woff2`
   - `Polin-Regular.woff2`
   - `Polin-Medium.woff2`
   - `Polin-Bold.woff2`

### ✅ שלב 2: הפעלת הפונט ב-CSS
פתח את `/src/styles/fonts.css` ו**הסר** את הסימנים `/*` ו-`*/` שמקיפים את הקוד של פונט פולין.

**לפני:**
```css
/*
@font-face {
  font-family: 'Polin';
  ...
}
*/
```

**אחרי:**
```css
@font-face {
  font-family: 'Polin';
  src: url('/fonts/Polin-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### ✅ שלב 3: החלת הפונט על האתר
פתח את `/src/styles/theme.css` ושנה את משתני הפונטים:

**מצא את השורות:**
```css
:root {
  --font-heading: 'Rubik', 'Heebo', sans-serif;
  --font-body: 'Assistant', 'Heebo', sans-serif;
}
```

**שנה ל:**
```css
:root {
  --font-heading: 'Polin', 'Rubik', 'Heebo', sans-serif;
  --font-body: 'Polin', 'Assistant', 'Heebo', sans-serif;
}
```

**או להשתמש בפולין רק לכותרות:**
```css
:root {
  --font-heading: 'Polin', 'Rubik', sans-serif;
  --font-body: 'Assistant', 'Heebo', sans-serif;
}
```

---

## 🎯 דוגמאות שימוש

### שימוש גלובלי (הגדרנו ב-theme.css)
הפונט יופעל אוטומטית על כל הכותרות והתוכן.

### שימוש ספציפי בקומפוננטה
```tsx
// פולין לכותרת ספציפית
<h1 className="font-['Polin'] font-bold text-4xl">
  אספרסימו - קפה איכותי
</h1>

// פולין Light לטקסט עדין
<p className="font-['Polin'] font-light">
  ברוכים הבאים לעולם הקפה שלנו
</p>

// פולין Bold לכפתור
<button className="font-['Polin'] font-bold">
  הזמן עכשיו
</button>
```

---

## 🔍 בדיקה שהפונט עובד

1. **פתח את האתר** בדפדפן
2. **לחץ F12** (פתיחת DevTools)
3. **עבור ל-Network** > **סנן לפי "Fonts"**
4. **רענן את הדף** (Ctrl+R)
5. **בדוק שהקבצים** `Polin-*.woff2` נטענים עם סטטוס 200

### או בדוק בקונסול:
```javascript
// הדבק בקונסול
document.fonts.check('1em Polin')
// אם מחזיר true - הפונט נטען בהצלחה!
```

---

## 🐛 פתרון בעיות

### הפונט לא מוצג:
- ✅ **בדוק שם קובץ:** השם חייב להיות **בדיוק** `Polin-Regular.woff2` (עם P גדולה)
- ✅ **בדוק נתיב:** הקובץ חייב להיות ב-`/public/fonts/` (לא `/src/fonts/`)
- ✅ **נקה cache:** לחץ Ctrl+Shift+R (Windows) או Cmd+Shift+R (Mac)
- ✅ **בדוק קונסול:** חפש שגיאות 404 ב-DevTools

### הפונט נטען אבל לא נראה:
- ✅ **בדוק שהפונט תומך בעברית** - פולין תמיד תומך
- ✅ **וודא ש-RTL פועל:** בדוק ב-`App.tsx` שיש `dir="rtl"`
- ✅ **בדוק font-weight:** אולי השתמשת במשקל שלא העלית (למשל 600)

### הפונט כבד/איטי:
- ✅ **השתמש רק ב-WOFF2** - הקל ביותר
- ✅ **העלה רק משקלים נדרשים** - Regular (400) + Bold (700) מספיק לרוב המקרים
- ✅ **השתמש ב-font-display: swap** - כבר מוגדר בקוד

---

## 🎨 משקלי פונט פולין ושימושיהם

| משקל | שם | קובץ | שימוש מומלץ |
|------|-----|------|-------------|
| 300 | Light | `Polin-Light.woff2` | טקסט משני, הערות |
| 400 | Regular | `Polin-Regular.woff2` | ⭐ טקסט רגיל, פסקאות |
| 500 | Medium | `Polin-Medium.woff2` | כפתורים, תפריטים |
| 700 | Bold | `Polin-Bold.woff2` | ⭐ כותרות, הדגשות |

**💡 המלצה:** התחל עם Regular (400) ו-Bold (700) בלבד.

---

## 📊 גרסה מהירה (רק עם Google Fonts אם זמין)

אם פולין זמין ב-Google Fonts, אפשר להשתמש ישירות:

**ב-`/src/styles/fonts.css`:**
```css
@import url('https://fonts.googleapis.com/css2?family=Polin:wght@300;400;500;700&display=swap');
```

**ב-`/src/styles/theme.css`:**
```css
:root {
  --font-heading: 'Polin', sans-serif;
  --font-body: 'Polin', sans-serif;
}
```

---

## ✅ רשימת בדיקה

- [ ] הורדתי את פונט פולין מ-Alefalefalef
- [ ] המרתי ל-WOFF2 (אם צריך)
- [ ] העליתי את הקבצים ל-`/public/fonts/`
- [ ] הסרתי את `/*` ו-`*/` מ-`/src/styles/fonts.css`
- [ ] עדכנתי את המשתנים ב-`/src/styles/theme.css`
- [ ] בדקתי ב-Network שהפונטים נטענים
- [ ] רעננתי את הדף עם Ctrl+Shift+R

---

## 🚀 אתה מוכן!

ברגע שתסיים את כל השלבים, פונט פולין יופיע בכל האתר ESPRESSIMO ויעניק לו מראה עברי מקצועי ומודרני.

**בהצלחה! ☕✨**
