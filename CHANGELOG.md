# Persistent Changelog
## ??/??/202?
The startup cleaning utility now includes links to open the Task Scheduler and Services windows. Thanks to Mike at, uh, everywhere, for the suggestion!


## 01/09/2025
Sophos Scan and Clean has been replaced by Trellix Stinger. 

Question 17 in the QA script will now detect whether you are currently running a remote service and asks whether you've deleted the ZIP file and extracted folder instead of asking about physical media if so. Thanks to Nathan H at 240 for the suggestion.

The battery health check during step 1 in the service scripts no longer holds up the progress of the rest of the script. 

## 12/20/2024
The _extras folder now lives in the root of your flash drives for easier access. It will still copy into the service directory when performing regular service.

The battery health checking script will now run automatically on any laptops during a regular service. Thanks to Nathan H for the suggestion. 

Fixed a pretty major bug that was causing the Service directory to be left behind on client machines. Thanks to Jamie for pointing it out!

There is now zero VBScript left in the service scripts, meaning that when Microsoft eventually does kill it off, we should not experience any problems with it. 

## 12/03/2024
Small-ish update - tools now write to the HKLM, rather than HKCU registry keys.

Most VBScript remnants have been removed.

This was a mostly behind the scenes change, but is pretty huge - PLEASE report any bugs ASAP!

## 11/27/2024
The Prep and Copy DDR Tools script now checks for a temporary profile before beginning the copy operation. Running scripts on a temporary profile will cause results not to be sent to the server and failure to track infections, leading to odd behavior in the scripts, so please create an image and correct the temporary profile issue before beginning service scripts!

A standalone script to open up the encoded service notes has been added to the root of the DDRx flash drives.

Several new applications have been added to the RAT list, including N-Able Take Control and GoTo Resolve (formerly known as GoToAssist.) Please suggest new RATs for the list as you discover them!

## 10/31/2024
You will now find a standalone battery tester script in the '_extras' folder called 'zz_Check-Battery-Health.bat' - this not only provides a battery test you can use on regular services (outside of the evaluation), but also generates a full HTML report that you can now check if the results seem confusing. Thanks to Neal @ 101 for the suggestion!

Thanks to Nick at the data recovery lab, the Optane detection script has been vastly improved for more accurate detection in both the standard and DDRx offline evaluation scripts.

The updater tool now has the option to skip updating ISOs when updating PE-only drives.

## 10/14/2024
Big changes for this release: we now have a working multi-boot version of DDRx8! We now have Secure Boot support - all you have to do is enroll a key (follow the on-screen directions when booting) and proceed as usual. If you have any questions, please reach out to Mike or Steve.

Please remember that disabling Secure Boot should not be part of regular service except for in outlier cases when it is necessary. 
 * Re-added Ventoy drive creation to the tool updater; to create a new Ventoy-based DDRx flash drive, insert a flash drive 8GB or larger (drives below 16GB will not include Windows installer ISOs) and click "New" - another dialog will prompt you for which drive you want to re-format for DDRx. Please note that old PE-only flash drives will still update fine using the "Update" feature.


## 09/20/2024
Howdy! Our scripts have been updated.

New features:
  * Persistent notes: In the notes app that launches after copying scripts, you'll now see a new tab for 'Persistent Notes' - these are stored on the computer, and are encoded in base64 to be not able to be plainly read - meaning you should be fairly safe to store information like QC account passwords and license numbers. Thanks to Blake & Brendin at 102 for the suggestion.

  * Optane detection: Both the evaluation script and the step 00 script now check and will alert technicians to Optane drives. - Thank you to everyone who suggested this and especially to Ryan at 240 who whipped up an example script.

  * Offline evaluation: You'll now see 'DDRx8_Offline Evaluation.bat' in the eval folder - this can be run from inside DDRx8 on non-booting machines. It currently does NOT provide an anti-malware scan, but provides most other functionality of the regular eval script. Please upload the results through myDot as you would on a machine without internet access.
  
As always, let us know if you have any problems or suggestions with/for any of the scripts.
