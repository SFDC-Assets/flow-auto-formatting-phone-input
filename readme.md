


![Status](https://img.shields.io/badge/status-Beta-yellowgreen)

<h1 align="center">FlowAutoFormattingPhoneInput</h1>

<p align="center">Aura component for Flow screens that displays a phone number input field and auto-formats as you type.</p>

---

![Animated preview](/media-preview-animated.gif)

## Description

This component can be used on a Flow screen to collect a phone number:

* Auto-formats the number as you type, so you don't have to add dashes
* Implements the pattern for U.S. phone numbers, e.g. 555-555-5555
* Input can be required or optional
* Validates the pattern of an entered value to prevent submission of incomplete or improperly formatted phone numbers
* Additionally, it uses Custom Labels for error messages, making it friendly for editing or translation.

## Install & Setup Instructions

**Please see the [Disclaimer](https://github.com/SFDC-Assets/FlowAutoFormattingPhoneInput#disclaimer)** (below)

1. Install the unmanaged package for all users:  **[https://login.salesforce.com/packaging/installPackage.apexp?p0=04tDo000000DA7C](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tDo000000DA7C)**
2. Add the Auto-Formatting Phone Input component to a screen element.
3. Configure the component’s properties (see below).
4. Rinse and repeat as needed.

### Component Properties

When you add this component to a Flow screen, there are a few properties to configure:

| Attribute        | Description |
| ---------------- | ------------- |
| **Label** 		   | Visible label that appears above the input. |
| **Placeholder**  | OPTIONAL.  Placeholder text that displays prior to the user entering data in the input. |
| **Required?**		 | True/false.  Controls whether the user must enter a value to proceed in the Flow. |
| **Value**	       | OPTIONAL.  The initial value for the field.  Also used to store the user-entered value for later use in the Flow. |

### Custom Labels Available for Editing/Translation

On-screen validation/error messages use Custom Labels so that you can edit them for more discreet guidance or translate them into languages other than English. I include basic translations for English, French, German, Italian, Spanish, and Spanish (Mexican), but my apologies if I've butchered your mother tongue (start a [discussion](https://github.com/SFDC-Assets/FlowAutoFormattingPhoneInput/discussions) if you have better translations for these labels or if you want me to add support for your language):

* **Phone_Input_Empty_Error_Message** – Error message that displays below the phone input when it is a required field but the value was submitted as empty.
* **Phone_Input_Pattern_Error_Message** – Error message that displays when the submitted value doesn't adhere to the valid pattern (e.g. 555-555-5555).

Once you have enabled Translation Workbench and added supported languages in your org, you can create translations that will override the default English values (from Setup, visit Custom Labels; see [this help article](https://help.salesforce.com/s/articleView?id=sf.cl_translate_edit.htm&type=5)).

## FAQs

**_Q: Can I format the number to use parentheses around the area code?_**

A: No, sorry, not at the present time. Right now it is hard-coded to support a 10-digit U.S. phone number with dashes (e.g. 555-555-5555).

**_Q: Does the component support formatting for non-U.S. phone numbers?_**

A: No, sorry, not at the present time. Right now it is hard-coded to support a 10-digit U.S. phone number with dashes (e.g. 555-555-5555).

**_Q: Can I easily customize translate text that's part of the component?_**

A: Yes! See the section (above) about the Custom Labels available for translation.

## Caveats
* Not intended for use with screen flows embedded in Visualforce. Not even tested.
* Only supports a 10-digit U.S. phone number with dashes (e.g. 555-555-5555).
* Multiple validation error messages may display below the input because validation is currently occuring twice:  once when you exit the input and again when you attempt to navigate in the flow.  I'm planning to reduce this to one set of error messages.

## Release History

<strong>11/08/2024</strong> - v1.01 publicly released.

<strong>1.01 Initial Release w/Improvements (11/06/2022)</strong> - Minor improvements and clean-up; use of custom labels for error messages; package now comes from a dedicated org.

<strong>1.0 Initial Release (11/03/2022)</strong> - Initial version of the component posted for populating Github and publishing an unmanaged package.

## Maintainers

<strong>[Mitch Lynch (egyptguy) - Distinguished Solution Engineer, Salesforce](https://github.com/egyptguy)</strong>

## Disclaimer

THIS APPLICATION IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL OR SIMILAR DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS APPLICATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

SUBJECT TO THE FOREGOING, THIS APPLICATION MAY BE FREELY REPRODUCED, DISTRIBUTED, TRANSMITTED, USED, MODIFIED, BUILT UPON, OR OTHERWISE EXPLOITED BY OR ON BEHALF OF SALESFORCE.COM OR ITS AFFILIATES, ANY CUSTOMER OR PARTNER OF SALESFORCE.COM OR ITS AFFILIATES, OR ANY DEVELOPER OF APPLICATIONS THAT INTERFACE WITH THE SALESFORCE.COM APPLICATION, FOR ANY PURPOSE, COMMERCIAL OR NON-COMMERCIAL, RELATED TO USE OF THE SALESFORCE.COM APPLICATION, AND IN ANY WAY, INCLUDING BY METHODS THAT HAVE NOT YET BEEN INVENTED OR CONCEIVED.
