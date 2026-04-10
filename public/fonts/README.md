# 📁 מדריך להעלאת פונטים ייחודיים - ESPRESSIMO

## 🎯 סקירה כללית
תיקייה זו מיועדת לאחסון קבצי פונטים מותאמים אישית לאתר ESPRESSIMO.

---

## 📥 שלב 1: הכנת קבצי הפונטים

### פורמטים נתמכים (לפי עדיפות):
1. **WOFF2** (.woff2) - ⭐ **מומלץ ביותר** - קל משקל, נתמך בכל הדפדפנים המודרניים
2. **WOFF** (.woff) - טוב לגיבוי
3. **TTF** (.ttf) - פורמט רגיל
4. **OTF** (.otf) - פורמט OpenType

### 💡 המלצה:
השתמש ב-WOFF2 בלבד לביצועים מיטביים. אם הפונט שלך הוא TTF/OTF, המר אותו ל-WOFF2 באתרים כמו:
- https://cloudconvert.com/ttf-to-woff2
- https://everythingfonts.com/ttf-to-woff2

---

## 📤 שלב 2: העלאת הקבצים

העלה את קבצי הפונטים לתיקייה זו:
```
/public/fonts/
├── MyFont-Regular.woff2
├── MyFont-Bold.woff2
├── MyFont-Light.woff2
├── MyFont-Medium.woff2
└── MyFont-Black.woff2
```

### 🔢 משקלי פונטים נפוצים:
- `100` - Thin
- `200` - ExtraLight
- `300` - Light
- `400` - Regular (רגיל)
- `500` - Medium
- `600` - SemiBold
- `700` - Bold (מודגש)
- `800` - ExtraBold
- `900` - Black

---

## ⚙️ שלב 3: הגדרת הפונטים ב-CSS

פתח את הקובץ `/src/styles/fonts.css` וערוך אותו כך:

### דוגמה 1: פונט בודד עם משקלים שונים
```css
/* פונט ראשי - Regular */
@font-face {
  font-family: 'CafeFont';
  src: url('/fonts/CafeFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* פונט ראשי - Bold */
@font-face {
  font-family: 'CafeFont';
  src: url('/fonts/CafeFont-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* פונט ראשי - Light */
@font-face {
  font-family: 'CafeFont';
  src: url('/fonts/CafeFont-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
```

### דוגמה 2: שני פונטים - אחד לכותרות ואחד לתוכן
```css
/* פונט לכותרות */
@font-face {
  font-family: 'HeadingFont';
  src: url('/fonts/HeadingFont-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* פונט לתוכן */
@font-face {
  font-family: 'BodyFont';
  src: url('/fonts/BodyFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### 📝 הערות חשובות:
- `font-family` - השם שתשתמש בו ב-CSS (אותו שם למשקלים שונים של אותו פונט)
- `font-weight` - משקל הפונט (400 = רגיל, 700 = מודגש)
- `font-display: swap` - מציג פונט גיבוי מיד ומחליף כשהפונט נטען

---

## 🎨 שלב 4: החלת הפונטים על האתר

### אופציה א': החלה גלובלית ב-`/src/styles/theme.css`

```css
:root {
  /* עדכן את משתני הפונטים */
  --font-heading: 'HeadingFont', 'Rubik', sans-serif;
  --font-body: 'BodyFont', 'Assistant', sans-serif;
}
```

### אופציה ב': שימוש ישיר בקומפוננטות

```tsx
// ב-React Component
<h1 className="font-['CafeFont']">כותרת בפונט מותאם</h1>

// או עם משקל ספציפי
<h1 className="font-['CafeFont'] font-bold">כותרת מודגשת</h1>
```

---

## 🌐 שלב 5: שימוש בפונטים בעברית

### פונטים מומלצים לעברית (בחינם):
1. **Rubik** - https://fonts.google.com/specimen/Rubik
2. **Assistant** - https://fonts.google.com/specimen/Assistant
3. **Heebo** - https://fonts.google.com/specimen/Heebo
4. **Alef** - https://fonts.google.com/specimen/Alef
5. **Varela Round** - https://fonts.google.com/specimen/Varela+Round
6. **Frank Ruhl Libre** - https://fonts.google.com/specimen/Frank+Ruhl+Libre (לעיצוב קלאסי)

### פונטים מסחריים איכוטיים לעברית:
- **Almoni** - פונט ישראלי מודרני ומקצועי
- **Greta Hebrew** - אלגנטי ומגוון
- **Open Sans Hebrew** - פופולרי ונקי

---

## ✅ דוגמה מלאה לאתר ESPRESSIMO

נניח שהעלת פונט בשם "EspressoFont":

### 1. קבצים בתיקייה:
```
/public/fonts/
├── EspressoFont-Light.woff2      (300)
├── EspressoFont-Regular.woff2    (400)
├── EspressoFont-Medium.woff2     (500)
├── EspressoFont-Bold.woff2       (700)
└── EspressoFont-Black.woff2      (900)
```

### 2. ב-`/src/styles/fonts.css`:
```css
/* פונט ייחודי ל-ESPRESSIMO */
@font-face {
  font-family: 'EspressoFont';
  src: url('/fonts/EspressoFont-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EspressoFont';
  src: url('/fonts/EspressoFont-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EspressoFont';
  src: url('/fonts/EspressoFont-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EspressoFont';
  src: url('/fonts/EspressoFont-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'EspressoFont';
  src: url('/fonts/EspressoFont-Black.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
```

### 3. ב-`/src/styles/theme.css`:
```css
:root {
  --font-heading: 'EspressoFont', 'Rubik', sans-serif;
  --font-body: 'EspressoFont', 'Assistant', sans-serif;
}
```

---

## 🐛 פתרון בעיות נפוצות

### הפונט לא מוצג:
1. ✅ בדוק שהקובץ נמצא ב-`/public/fonts/`
2. ✅ בדוק שהנתיב נכון: `url('/fonts/...')` (עם `/` בהתחלה)
3. ✅ נקה את cache הדפדפן (Ctrl+Shift+R / Cmd+Shift+R)
4. ✅ בדוק שהפורמט נכון: `format('woff2')` לקובץ .woff2

### הפונט לא תומך בעברית:
- וודא שהפונט כולל תווי עברית
- הוסף פונט גיבוי שתומך בעברית: `font-family: 'MyFont', 'Heebo', sans-serif;`

### הפונט כבד מדי:
- המר ל-WOFF2 לקובץ קל יותר
- טען רק את המשקלים שבהם אתה משתמש (400, 700)
- השתמש ב-`font-display: swap` לטעינה מהירה יותר

---

## 🚀 טיפים לביצועים

1. **השתמש רק ב-WOFF2** - הקל ביותר והנתמך בכל הדפדפנים (2015+)
2. **טען רק משקלים נדרשים** - אל תטען 9 משקלים אם אתה משתמש ב-2
3. **preload לפונטים קריטיים** - הוסף ב-`index.html`:
```html
<link rel="preload" href="/fonts/MyFont-Regular.woff2" as="font" type="font/woff2" crossorigin>
```
4. **font-display: swap** - מציג טקסט מיד עם פונט גיבוי

---

## 📞 זקוק לעזרה?

- בדוק את הקונסול (F12) לשגיאות טעינה
- וודא שהקובץ נטען ב-Network tab
- השתמש בכלי DevTools > Computed > font-family לראות איזה פונט משמש

---

**בהצלחה! ☕✨**
