This bug occurs when using the Expo DocumentPicker API on Android.  After selecting a file, the promise sometimes unexpectedly rejects without providing a clear error message. This makes debugging difficult, as there's no indication of what went wrong during the file selection process.  The problem is intermittent, making reproduction challenging.  
```javascript
import * as DocumentPicker from 'expo-document-picker';

async function pickDocument() {
  try {
    const result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
  } catch (error) {
    console.error('Error picking document:', error); // Often shows an empty error object or a generic error
  }
}
```