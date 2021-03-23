(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{447:function(e,t,o){e.exports=o.p+"assets/img/usb-erase.1421d457.png"},448:function(e,t,o){e.exports=o.p+"assets/img/usb-folder.03d89774.png"},449:function(e,t,o){e.exports=o.p+"assets/img/usb-folder-highlight.319b4d56.png"},450:function(e,t,o){e.exports=o.p+"assets/img/oc-config-compare.935f00cb.png"},451:function(e,t,o){e.exports=o.p+"assets/img/ocvalidate.7ccba5d5.png"},550:function(e,t,o){"use strict";o.r(t);var r=o(26),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"updating-opencore-and-macos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#updating-opencore-and-macos"}},[e._v("#")]),e._v(" Updating OpenCore and macOS")]),e._v(" "),r("h2",{attrs:{id:"updating-opencore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#updating-opencore"}},[e._v("#")]),e._v(" Updating OpenCore")]),e._v(" "),r("p",[e._v("So the main things to note with updating OpenCore:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Releases"),r("OutboundLink")],1),e._v(" happen the first Monday of every month")]),e._v(" "),r("li",[e._v("The "),r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Differences/Differences.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Differences.pdf"),r("OutboundLink")],1),e._v(" will tell you all the things added and removed from this version of OpenCore compared to the previous release")]),e._v(" "),r("li",[e._v("The OpenCore Install Guide will have a note in the "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("header"),r("OutboundLink")],1),e._v(" about what release version it supports")])]),e._v(" "),r("blockquote",[r("p",[e._v("So how do I update?")])]),e._v(" "),r("p",[e._v("So the process goes as follows:")]),e._v(" "),r("h3",{attrs:{id:"_1-download-the-latest-release-of-opencore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-download-the-latest-release-of-opencore"}},[e._v("#")]),e._v(" 1. "),r("strong",[e._v("Download the latest release of OpenCore")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCorePkg"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"_2-mount-your-efi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-mount-your-efi"}},[e._v("#")]),e._v(" 2. "),r("strong",[e._v("Mount your EFI")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("So first, lets mount your hard drive's EFI and make a copy somewhere safe with "),r("a",{attrs:{href:"https://github.com/corpnewt/MountEFI",target:"_blank",rel:"noopener noreferrer"}},[e._v("MountEFI"),r("OutboundLink")],1),e._v(". We won't be updating the drive's EFI at first, instead we'll be grabbing a spare USB to be our crash dummy. This allows us to keep a working copy of OpenCore in case our update goes south")])]),e._v(" "),r("li",[r("p",[e._v("For the USB, it must be formatted as GUID. Reason for this is that GUID will automatically create an EFI partition, though this will be hidden by default so you'll need to mount it with MountEFI.")])])]),e._v(" "),r("p",[r("img",{attrs:{src:o(447),alt:""}})]),e._v(" "),r("ul",[r("li",[e._v("Now you can place your OpenCore EFI on the USB")])]),e._v(" "),r("p",[r("img",{attrs:{src:o(448),alt:""}})]),e._v(" "),r("h3",{attrs:{id:"_3-replace-the-opencore-files-with-the-ones-you-just-downloaded"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-replace-the-opencore-files-with-the-ones-you-just-downloaded"}},[e._v("#")]),e._v(" 3. "),r("strong",[e._v("Replace the OpenCore files with the ones you just downloaded")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("The important ones to update:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("EFI/BOOT/BOOTx64.efi")])]),e._v(" "),r("li",[r("code",[e._v("EFI/OC/OpenCore.efi")])]),e._v(" "),r("li",[r("code",[e._v("EFI/OC/Drivers/OpenRuntime")]),e._v("("),r("strong",[e._v("Don't forget this one, OpenCore will not boot with mismatched versions")]),e._v(")")])])]),e._v(" "),r("li",[r("p",[e._v("You can also update other drivers you have if present, these are just the ones that "),r("strong",[e._v("must")]),e._v(" be updated in order to boot correctly")])])]),e._v(" "),r("p",[r("img",{attrs:{src:o(449),alt:""}})]),e._v(" "),r("h3",{attrs:{id:"_4-compare-your-config-plist-to-that-of-the-new-sample-plist"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-compare-your-config-plist-to-that-of-the-new-sample-plist"}},[e._v("#")]),e._v(" 4. "),r("strong",[e._v("Compare your config.plist to that of the new Sample.plist")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("With this, there's a couple ways to do this:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/corpnewt/OCConfigCompare",target:"_blank",rel:"noopener noreferrer"}},[e._v("OCConfigCompare"),r("OutboundLink")],1),e._v(" to compare between the sample.plist and your config.plist")]),e._v(" "),r("li",[r("code",[e._v("diff (file input 1) (file input 2)")]),e._v(" in terminal")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.scootersoftware.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("BeyondCompare"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Make a new config based off reading the updated OpenCore Install Guide")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:o(450),alt:""}})]),e._v(" "),r("ul",[r("li",[e._v("Once you've made the adjustments, to make sure that you config is compliant with the newest release of OpenCore, you can use the OpenCore Utility ocvalidate: this tool will help ensure your config.plist is matching the OpenCore specification of the matching build.\n"),r("ul",[r("li",[e._v("Please note, that "),r("code",[e._v("ocvalidate")]),e._v(" must match the used OpenCore release and may not be able to detect all configuration flaws present in the file. We recommend to double check your setting with the OpenCore Guide on what to set everything to, otherwise read the "),r("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Differences/Differences.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Differences.pdf"),r("OutboundLink")],1),e._v("  for more in-depth documentation on changes.")]),e._v(" "),r("li",[e._v("To run "),r("code",[e._v("ocvalidate")]),e._v(", "),r("code",[e._v("cd")]),e._v(" into OpenCore's "),r("code",[e._v("Utilties/ocvalidate/")]),e._v(" and run "),r("code",[e._v("./ocvalidate <insert_config.plist>")]),e._v(". Note you may need to run "),r("code",[e._v("chmod +x ocvalidate")]),e._v(" for it to execute.")])])])]),e._v(" "),r("p",[r("img",{attrs:{src:o(451),alt:""}})]),e._v(" "),r("h3",{attrs:{id:"_5-boot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-boot"}},[e._v("#")]),e._v(" 5. "),r("strong",[e._v("Boot!")])]),e._v(" "),r("ul",[r("li",[e._v("Once everything's working with the dummy USB, you can mount the EFI and move it over to the hard drive's EFI partition. Remember to keep a copy of your old EFI in cases where OpenCore is acting funny down the road")])]),e._v(" "),r("h2",{attrs:{id:"updating-kexts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#updating-kexts"}},[e._v("#")]),e._v(" Updating Kexts")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Updating Kexts is a similar process to updating OpenCore, make a copy of everything and update on a dummy USB in case there's issues")])]),e._v(" "),r("li",[r("p",[e._v("The easiest way to update your kexts is via 2 tools:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/corpnewt/Lilu-and-Friends",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lilu and Friends"),r("OutboundLink")],1),e._v(" to download and compile the kexts")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/corpnewt/KextExtractor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kext Extractor"),r("OutboundLink")],1),e._v(" to merge them into your EFI")])])])]),e._v(" "),r("h2",{attrs:{id:"updating-macos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#updating-macos"}},[e._v("#")]),e._v(" Updating macOS")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("So this is probably one of the most challenging parts, maintaining your system through OS updates. The main things to keep in mind:")]),e._v(" "),r("ul",[r("li",[e._v("With OS updates, make sure everything has been updated and you have some form of recovery like TimeMachine or an older macOS installer with a known good EFI on it")]),e._v(" "),r("li",[e._v("Do a bit of google-fu to see if others are having issues with the newest update")])])]),e._v(" "),r("li",[r("p",[e._v("I've also provided a bit more of a detailed map of what's changed in macOS versions, see below:")])])]),e._v(" "),r("p",[r("strong",[e._v("macOS Catalina")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("10.15.0\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://dortania.github.io/Getting-Started-With-ACPI/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Requires proper EC"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Dual socket and most AMD CPUs need "),r("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppleMCEReporterDisabler.kext"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("MacPro5,1 support has been dropped")])])]),e._v(" "),r("li",[e._v("10.15.1\n"),r("ul",[r("li",[e._v("Requires WhateverGreen 1.3.4+")]),e._v(" "),r("li",[e._v("Broke DRM for many GPUs(see "),r("a",{attrs:{href:"https://github.com/acidanthera/WhateverGreen/blob/master/Manual/FAQ.Chart.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("DRM Chart"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("Requires all previous fixes")])])]),e._v(" "),r("li",[e._v("10.15.2\n"),r("ul",[r("li",[e._v("Fixes Navi support in the installer")]),e._v(" "),r("li",[e._v("Requires all previous fixes")])])]),e._v(" "),r("li",[e._v("10.15.3\n"),r("ul",[r("li",[e._v("No change")]),e._v(" "),r("li",[e._v("Requires all previous fixes")])])]),e._v(" "),r("li",[e._v("10.15.4\n"),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/AMD-OSX/AMD_Vanilla",target:"_blank",rel:"noopener noreferrer"}},[e._v("AMD CPU users need to update "),r("code",[e._v("cpuid_set_cpufamily")]),e._v(" patch"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Fixes DRM on many Ellesmere based Polaris GPUs")]),e._v(" "),r("li",[e._v("Requires all previous fixes(excluding "),r("code",[e._v("shikigva=80")]),e._v(" for Polaris DRM for most users)")])])]),e._v(" "),r("li",[e._v("10.15.5\n"),r("ul",[r("li",[e._v("UHD 630's framebuffer broke for many, if you receive black screen you may need to swap from "),r("code",[e._v("07009B3E")]),e._v(" to "),r("code",[e._v("00009B3E")])]),e._v(" "),r("li",[e._v("Comet Lake S no longer requires a CPU ID spoof")])])]),e._v(" "),r("li",[e._v("10.15.6\n"),r("ul",[r("li",[e._v("No change")]),e._v(" "),r("li",[e._v("Requires all previous fixes for 10.15.5")])])]),e._v(" "),r("li",[e._v("10.15.7\n"),r("ul",[r("li",[e._v("No change")]),e._v(" "),r("li",[e._v("Requires all previous fixes for 10.15.5")])])])]),e._v(" "),r("p",[r("strong",[e._v("macOS Big Sur")]),e._v(":")]),e._v(" "),r("ul",[r("li",[e._v("11.0.1\n"),r("ul",[r("li",[e._v("See here: "),r("a",{attrs:{href:"https://dortania.github.io/OpenCore-Install-Guide/extras/big-sur/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenCore and macOS 11: Big Sur"),r("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);