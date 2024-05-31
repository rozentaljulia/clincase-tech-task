# Test strategy

### Testing Approach:

This strategy focuses on functional testing of the medication import functionality (Black-Box)

### Test Levels:

- **Unit Testing(Developers responsibility)**: Focus on individual components processing CSV data (e.g., parsers, validators).
- **Integration Testing(Developers responsibility)**: Verify the interaction between the import functionality and other system components, as well as coverage of additional cases of CSV validation.
- **E2E/system**: Test the overall medication import process from the user interface to data registration and its representation in UI.

### Testing techniques:

- **Equivalence Partitioning**: Divide CSV files into partitions based on expected behavior, for example, valid file/invalid file.
- **Boundary Value Analysis**: Focus on testing data at the edges of acceptable ranges (e.g. maximum number of medications).
- **Error Guessing**: Identify potential error scenarios (Case sensitivity for field names, invalid date format).

### Additional Considerations:

**Non-functional testing**

- _Load test_: evaluate the system's performance when many users attempt to import medication data simultaneously.
- _Recovery_: as we deal with important data we should make sure that in case we have an unexpected failure (i.e: System crash, Network loss) during the import process our system can recover without data loss or corruption

## Test cases

### **TC-001**:

#### **Description**:

A user with a Doctor role (and related permissions) can import a valid CSV file

#### **Pre-conditions:**

1. User is granted a Doctore role with permission to import files
2. The CSV file is valid:

```
_medicationId, nature,expiryDate, comment
2324, placebo,02/10/2016, comments for this medication
2325, regular,30/11/2017, comments for this medication
2326, regular,11/12/2016, comments for this medication_
```

#### **Steps:**

1. log in as a user with the Doctor role and go to the Medication Inventory screen.
2. Verify that the "Register Medication" button is displayed.
3. Click on the "Register Medication" button 4. Verify that the import dialog is displayed.
4. Inside the dialog click on "Upload CSV file" and then on the "Import file" button

#### **Expected Outcome:**

- The data is successfully uploaded and displayed on the screen.
- The imported items have a "New" status

### **TC-002**:

#### **Description**:

Users without a Doctor role (and required user permissions) cannot access Medication import

#### **Pre-conditions:**

#### **Steps:**

1. Login into the system and go to the Medication Inventory screen
2. Navigate to the Medication Management section.

#### **Expected Outcome:**

The user receives an error message that informs the user that he has no permission to import files and he should contact his system admin for more information.

### **TC-003**:

#### **Description**:

Import fails for non-CSV file format

#### **Pre-conditions:**

#### **Steps:**

1. Login as Doctor.
2. Attempt to import a file in a non-CSV format (for example: XML).

#### **Expected Outcome:**

The import process fails with an error message that emphasizes that this file format is not supported.

### **TC-004**:

#### **Description**:

Import fails for invalid CSV format (missing header)

#### **Pre-conditions:**

Prepare a CSV file with the next data:

```
medicationId,nature,expiryDate,notes
2324,placebo,02/10/2016, comments for this medication_
```

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

The import process fails with an error message, emphasizing that the CSV structure is invalid as the header is missing.

### **TC-005**:

#### **Description**:

Import fails when an invalid delimiter (not a comma) is used.

#### **Pre-conditions:**

Prepare a CSV file with unsupported delimiter(for example ":")

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

The import process fails with an error message, emphasizing that the CSV structure is invalid as the used delimiter is not supported.

### **TC-006**:

#### **Description**:

Import fails for missing mandatory "medicationId" column.

#### **Pre-conditions:**

Prepare a CSV file with an empty 'medicationId' column:

```
_medicationId,nature,expiryDate, comment
,,placebo,02/10/2016, comments for this medication
,,regular,30/11/2017, comments for this medication
,,regular,11/12/2016, comments for this medication_
```

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

The import process fails with an error message, emphasizing that the CSV structure is invalid as the mandatory column: medicationId is missing.

### **TC-007**:

#### **Description**:

Import fails because the mandatory "nature" column is missing.

#### **Pre-conditions:**

Prepare a CSV file with an empty 'nature' column.

```
_medicationId,nature,expiryDate, comment
2324,,02/10/2016, comments for this medication
2325,,30/11/2017, comments for this medication
2326,,11/12/2016, comments for this medication_
```

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

The import process fails with an error message, emphasizing that the CSV structure is invalid as the mandatory column: "nature" is missing.

### **TC-008**:

#### **Description**:

Data is successfully imported when the expiryDate column is empty.

#### **Pre-conditions:**

Prepare a CSV file with an empty expiryDate column:

```
_medicationId,nature,expiryDate, comment
2324,plocebo,, comments for this medication
2325,placebo,, comments for this medication
2326,placebo,, comments for this medication_
```

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

The import process is completed when the new data is displayed.

### **TC-009**:

#### **Description**:

Import fails when the date format of the expiryDate is not supported

#### **Pre-conditions:**

Prepare a CSV file with invalid expiryDate format:

```
_medicationId,nature,expiryDate, comment
2324,plocebo,07/30/2045, comments for this medication
2325,placebo,, comments for this medication
2326,placebo,, comments for this medication_
```

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

The import process fails with an error indicating that the date format inside expiryDate column is invalid

### **TC-010**:

#### **Description**:

Import fails when the date of expiryDate is past date

#### **Pre-conditions:**

Prepare a CSV file with expiryDate date in the past:

```
_medicationId,nature,expiryDate, comment
2324,plocebo,22/04/1980, comments for this medication
2325,placebo,, comments for this medication
2326,placebo,, comments for this medication_
```

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

The import process fails with an error indicating that the date format inside expiryDate column is invalid

### **TC-011**:

#### **Description**:

Import fails for nature values that are not configured in the list of valid values

#### **Pre-conditions:**

Prepare a CSV file with invalid values in the nature column

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

The import process fails with an error indicating that the values inside the nature column are not valid.

### **TC-012**:

#### **Description**:

Import fails when there are duplicated medication IDs in the file

#### **Pre-conditions:**

Prepare a CSV file with duplicated IDs in the medicationId column

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

The import process fails with an error indicating that there are duplicated IDs inside medicationId column

### **TC-013**:

#### **Description**:

Import fails when the medicationId column has incorrect characters

#### **Pre-conditions:**

- Prepare a CSV file with unsupported characters in Id's (special characters, letters instead of numbers)

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import the same CSV file again

#### **Expected Outcome:**

The import process fails with an error indicating that the incorrect characters used in the IDs

### **TC-014**:

#### **Description**:

Import fails when column names are case-sensitive

#### **Pre-conditions:**

Prepare a CSV file with header row fields written in case sensitive way:

```
_medicationID,nature,expiryDate, Comment
2324,plocebo,22/04/1980, comments for this medication
2325,placebo,, comments for this medication
2326,placebo,, comments for this medication_
```

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

The import process fails with an error indicating that field names are invalid(case mismatch)

### **TC-015**:

#### **Description**:

50,000 medications can be successfully imported via a CSV file

#### **Pre-conditions:**

Prepare a CSV file with exactly 50,000 medications

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

- The data is successfully uploaded and displayed on the screen.
- The imported items have a "New" status

### **TC-016**:

#### **Description**:

Import fails when the number of medications exceeding the limit of 50,000 items

#### **Pre-conditions:**

Prepare a CSV file with more than 50,000 medications(for example: 100,000)

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import a CSV file

#### **Expected Outcome:**

The import process fails with an error indicating that the number of medicaments that the daily limit of medicaments that can be loaded as exceeded.

### **TC-017**:

#### **Description**:

Import fails when the files include items that already were imported previously.

#### **Pre-conditions:**

- Prepare a CSV file
- Import it

#### **Steps:**

1. Login as a Doctor.
2. Attempt to import the same CSV file again

#### **Expected Outcome:**

The import process fails with an error indicating that the items already exist.

### Why this strategy?

I think this strategy provides comprehensive coverage for the feature's functionality and achieves a high level of confidence in the CSV import function's ability to handle different scenarios effectively.

### Potential risks and how to minimize them:

Based on the error-guessing techniques here are some potential risks and strategies to minimize them:

- _Data integrity_: Errors during import could lead to missing or incorrect medication data in the system. In this case, we should have some **data rollback plan** to rollback the changes and prevent corrupt data.
- _Invalid CSV data_: We covered with our test strategy most of the cases but it is worth also considering improvement in error messages by providing users with informative error messages and clear documentation or tutorials
- _Performance and Scalability_: to avoid performance issues and scalability we should evaluate the system's ability to handle increased data volume over time by executing non-functional tests.
- _Parsing errors_: Upload file with missing delimiters, incorrect quotation marks, or invalid characters can lead to parsing errors thus we need to implement strong parsing logic that can handle different corner cases for example: extra spaces, empty lines (via integration tests)

### Automation testing:

Automation has some key benefits:

- Efficiency: Automating repetitive test cases saves time and resources.
- Regression: Automated tests can be re-run after code changes to ensure functionality has not broken.
- Improved Coverage: Automation allows for running a larger number of test cases more frequently thus increasing test coverage.
- Consistency: Automated tests ensure consistent execution and reduce the possibility of human error.

For this functionality, I would suggest creating
**UI automation** with all the test cases I listed in the test strategy.

### suggested enhancements:

Here are some potential enhancements that should be considered for this story to improve user experience and functionality:

- _Import progress bar_: We should display a progress bar during the import process to give users an estimated time for completion, especially for large files.
- _Partial import_: A partial import of the files with some errors will improve usability by avoiding the abortion of the whole import due to minor issues and forcing the user to repeat the import.
- _Provide with manual functionality_: We can improve user experience by providing additional functionality such as: editing existing items and allow to add items manually(if there are only 1 - 3 items it might be easier for the user to insert those items manually)
- _Import status notifications_: Keeping the user updated about the status of his import might improve his experience with the system.
- _Import history_: Providing the user with this option might improve user experience as he can track his imports and review potential issues(as the history should include also errors during imports)
