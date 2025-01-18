# Expo DocumentPicker: Silent Promise Rejection on Android

This repository demonstrates an uncommon bug encountered when using the Expo DocumentPicker API on Android. The `getDocumentAsync` promise sometimes rejects without providing a meaningful error message, making debugging difficult.

## Problem

The core issue is the intermittent and silent failure of `DocumentPicker.getDocumentAsync`.  The `catch` block often receives an empty error object or a very generic error, providing no clues about the root cause.

## Reproduction

Reproducing this bug is inconsistent. It may require specific Android versions, device configurations or app states.  The provided `bug.js` demonstrates the basic usage of the API where this problem manifests.

## Solution (see bugSolution.js)

While a complete solution addressing the root cause in Expo's code is not directly possible,  we can implement better error handling to provide more informative feedback to the user in case of failure. This involves checking for various error conditions and providing better contextual error messages.