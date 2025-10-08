# Persistent Changelog
## ??/??/2025

## 10/08/2025
<img src="/images/gifs/cheeky-skele.gif" style="width: 250px;">

DDRx ISO has been updated!

* Macrium is back
* Now boots on machines with as little as 3.5GB of RAM

## 07/10/2025
<img src="/images/gifs/angrySun.gif">

Due to ongoing issues with Malwarebytes, we have replaced it for now with the Microsoft Safety Scanner. We strongly recommend that for most services, you stick with the Quick scan -- if it finds enough malware, it will recommend a Full scan afterwards, which takes a very long time.

## 05/11/2025
<img src="/images/gifs/ken-shoryu.gif" style="width: 250px;">

* New script order! We've prioritized malware removal and de-prioritized startup cleaning and temp file removal. You should be able to find a new checklist on myDot.

* EEK and Stinger are dead to us, now. We have replaced them with the portable technician version of Malwarebytes Anti-Malware! There are a few other utilities included with the technician's toolset and we'll likely be integrating them into some other processes, but for now we have just added a new world-class anti-malware scanner into our toolkits. That also means that remote services and in-store services will run the same scans, so we'll no longer be skipping any important steps just because it's on a remote!

* The PC Evaluation script will now give notice if a system firmware is more than 6 months out of date. This does NOT mean that there is an updated system BIOS - only that we should be checking for one.

## 03/24/2025
<img src="/images/gifs/frogbox.gif" style="width: 250px;">
Our shiny new PC Evaluation script is officially out of beta! See a mostly complete list of changes and improvements below. (Below, below.)

BUT FIRST! There were a few changes to the service scripts, as well!

* Brendin and Blake (RIP) at 102 found a bug wherein the QA script fails to run if the user has an apostrophe in the name of their user folder. Annoying, but addressable! Instead of the QA script copying to the temporary folder of the user, it will now copy to the system-wide temporary location, where we can be confident there will be no spaces. 

* RogueKiller is no more. Well, it IS some more, but now it's called Adlice Protect. The scripts have been updated to reflect that.

Changes to the evaluation script:

* It's prettier. We have dark mode support, manufacturer-specific icons, custom fonts, and resizable windows. Wow-ee.

* In that vein, there are no more dropdown menus with clunky information dumps. There's a 3-column (or 2-column for low-resolutions) layout with everything visible at a glance. 

* The battery monitor has been lifted directly from the standalone script and just plonked right on this one. The HTML battery report can be viewed directly if the results displayed seem suspicious. 

* We are no longer using a third-party utility to detect extensions in web browsers - we have a home-cooked function that pulls extensions from browsers as well as websites with allowed notifications (in Chromium-based browsers.)

* Drive data is more visually apparent, with charts for disk space usage per drive letter.

* A pane for critical system errors from within the last 30 days has been added, hopefully giving more insight into other problems the machines may be having beyond what the customer has reported.

* There is now easy access to logs for both the SFC and malware scans, so you can further investigate results. If the malware results looked wonky, you can also now re-run the script (using the GUI interface) to double-check the results. 

* We are now checking for activation status for Microsoft Windows during the evaluation script, and if Windows is not activated, you'll see a warning for it in the 'Warnings' section. 

* Finally - the evaluation script will no longer prompt for store or work order numbers prior to completion of the scripts. The only roadblocks to starting the script wil be a warning for RATs and a warning for not having internet access. 

All data will now need to be entered into the 'Ticket Info' section at the bottom-right of the results window. All fields must be completed before they can be submitted, and the script will warn you if you try to close out without submitting. 

## 02/12/2025
Hot off the presses and out of my bloody fingertips comes a new version of the evaluation script! Try it out! Remember to click the 'Save and Submit' button! (It will still yell at you if you don't, though!)

Report bugs ASAP, and if it doesn't work for you, use the old evaluation script. It will be sticking around until most of the kinks are worked out of the new one.

## 02/06/2025
<img src="/images/gifs/cutie.gif" style="width: 100px;">

Big thanks to 24H2 for breaking tiny things in huge ways! This is mostly an under-the-hood update but there's plenty more to come.

* Before we get to the Microsoft messes -- there's a new script in the _extras folder, which will help you with resetting network settings! Thanks to Blake at 102 for the suggestion!

* As Microsoft has deprecated the WMIC command for Windows 11 24H2, lots of small things needed to be changed throughout a lot of the data collection portions of the scripts. If you notice something isn't reporting correctly, please let Steve know!

* After investigating several reports of the Step 0 script to fail to run, it is starting to become apparent that Microsoft may be rolling out updates to break the old Command Host process that used to be the back end for both Command Prompt and Powershell in favor of Windows Terminal. All scripts now check for the existence of Windows Terminal, and if it exists, use that to launch commands. This will hopefully nip this issue in the bud before it becomes a much biger problem for us. 

Please report bugs ASAP!!!

## 01/12/2025
Big update this time! This is mostly related to GUI and usability stuff, but a lot went on under the hood to make it happen. While the logic didn't change much (and I spent a big chunk of my weekend bug-testing), there may be issues - please report them ASAP! (Typos do in fact count as a bug, so go ahead and report those, too!)

* The startup cleaning utility has had its entire GUI refreshed to make it more user friendly. It no longer closes immediately when items are removed. There are also now buttons for both Task Scheduler and the Services window - thanks to Mike at, uh, everywhere, for the suggestion!

* The message box pop-up window has been redesigned for a more consistent look across the scripts.

* The step 1 script has been updated to alert the technician to whether a resore point has been created successfully.

* Step 11 now shows the progress of the disk optimization so that you can actually see it happening instead of just hoping it is!

* The QA script now randomizes the location of the Yes and No buttons just to keep everyone on their toes.

* Due to some confusion around the DDRx drive creation utility, I now have it clearly labled that this is only for creating a Ventoy-based flash drive. Standard DDRX PE flash drives (without any additional utilities and the need for Secure Boot workarounds) need to be created via Rufus.

## 01/09/2025
<img src="/images/gifs/yoshi.gif" style="width: 100px;">

* Sophos Scan and Clean has been replaced by Trellix Stinger. 

* Question 17 in the QA script will now detect whether you are currently running a remote service and asks whether you've deleted the ZIP file and extracted folder instead of asking about physical media if so. Thanks to Nathan H at 240 for the suggestion.

* The battery health check during step 1 in the service scripts no longer holds up the progress of the rest of the script. 

## 12/20/2024

* The _extras folder now lives in the root of your flash drives for easier access. It will still copy into the service directory when performing regular service.

* The battery health checking script will now run automatically on any laptops during a regular service. Thanks to Nathan H for the suggestion. 

* Fixed a pretty major bug that was causing the Service directory to be left behind on client machines. Thanks to Jamie for pointing it out!

* There is now zero VBScript left in the service scripts, meaning that when Microsoft eventually does kill it off, we should not experience any problems with it. 

## 12/03/2024
<img src="/images/gifs/tina-santa.gif" style="width: 100px;">

Small-ish update this time.

*  tools now write to the HKLM, rather than HKCU registry keys.

* Most VBScript remnants have been removed.

This was a mostly behind the scenes change, but is pretty huge - PLEASE report any bugs ASAP!

## 11/27/2024
* The Prep and Copy DDR Tools script now checks for a temporary profile before beginning the copy operation. Running scripts on a temporary profile will cause results not to be sent to the server and failure to track infections, leading to odd behavior in the scripts, so please create an image and correct the temporary profile issue before beginning service scripts!

* A standalone script to open up the encoded service notes has been added to the root of the DDRx flash drives.

* Several new applications have been added to the RAT list, including N-Able Take Control and GoTo Resolve (formerly known as GoToAssist.) Please suggest new RATs for the list as you discover them!

## 10/31/2024
* You will now find a standalone battery tester script in the '_extras' folder called 'zz_Check-Battery-Health.bat' - this not only provides a battery test you can use on regular services (outside of the evaluation), but also generates a full HTML report that you can now check if the results seem confusing. Thanks to Neal @ 101 for the suggestion!

* Thanks to Nick at the data recovery lab, the Optane detection script has been vastly improved for more accurate detection in both the standard and DDRx offline evaluation scripts.

* The updater tool now has the option to skip updating ISOs when updating PE-only drives.

## 10/14/2024
<img src="/images/gifs/skele-skeleton.gif" style="width: 100px;">

Big changes for this release: we now have a working multi-boot version of DDRx8! We now have Secure Boot support - all you have to do is enroll a key (follow the on-screen directions when booting) and proceed as usual. If you have any questions, please reach out to Mike or Steve.

Please remember that disabling Secure Boot should not be part of regular service except for in outlier cases when it is necessary. 

* Re-added Ventoy drive creation to the tool updater; to create a new Ventoy-based DDRx flash drive, insert a flash drive 8GB or larger (drives below 16GB will not include Windows installer ISOs) and click "New" - another dialog will prompt you for which drive you want to re-format for DDRx. Please note that old PE-only flash drives will still update fine using the "Update" feature.


## 09/20/2024
<img src="/images/gifs/raichu.gif" style="width: 100px;">

Howdy! Our scripts have been updated.

New features:
  * Persistent notes: In the notes app that launches after copying scripts, you'll now see a new tab for 'Persistent Notes' - these are stored on the computer, and are encoded in base64 to be not able to be plainly read - meaning you should be fairly safe to store information like QC account passwords and license numbers. Thanks to Blake & Brendin at 102 for the suggestion.

  * Optane detection: Both the evaluation script and the step 00 script now check and will alert technicians to Optane drives. - Thank you to everyone who suggested this and especially to Ryan at 240 who whipped up an example script.

  * Offline evaluation: You'll now see 'DDRx8_Offline Evaluation.bat' in the eval folder - this can be run from inside DDRx8 on non-booting machines. It currently does NOT provide an anti-malware scan, but provides most other functionality of the regular eval script. Please upload the results through myDot as you would on a machine without internet access.
  
As always, let us know if you have any problems or suggestions with/for any of the scripts.
