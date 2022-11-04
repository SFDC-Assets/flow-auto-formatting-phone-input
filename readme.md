


![Status](https://img.shields.io/badge/status-Beta-yellowgreen)

<h1 align="center">flowAutoFormattingPhoneInput</h1>

<p align="center">Aura component for Flow screens that displays a phone number input field and auto-formats as you type.</p>

---

![Animated preview](/media-preview-animated.gif)

## Description

This component can be used on a Flow screen to collect a phone number:

* Auto-formats the number as you type, so you don't have to add dashes
* Implements the pattern for U.S. phone numbers, e.g. 555-555-5555
* Input can be required or optional
* Validates the entered value to enforce it as a required field, prevent incomplete or improperly formatted numbers, or both

## Install & Setup Instructions

**Please see the [Disclaimer](https://github.com/egyptguy/flowAutoFormattingPhoneInput#disclaimer)** (below)

1. Install the unmanaged package:  **[https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000008fjD3](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t6g000008fjD3)**
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

## FAQs

**_Q: Can I format the number to use parentheses around the area code?_**

A: No, sorry, not at the present time. Right now it is hard-coded to support a 10-digit U.S. phone number with dashes (e.g. 555-555-5555).

**_Q: Does the component support formatting for non-U.S. phone numbers?_**

A: No, sorry, not at the present time. Right now it is hard-coded to support a 10-digit U.S. phone number with dashes (e.g. 555-555-5555).

## Caveats
* <strong>Not intended for use with screen flows embedded in Visualforce</strong>. Not even tested.
* Only supports a 10-digit U.S. phone number with dashes (e.g. 555-555-5555).

## Release History

<strong>1.0 Initial Release (11/03/2022)</strong> - Initial version of the component posted for populating Github and publish an unmanaged package.

## Maintainers

<strong>[Mitch Lynch (egyptguy)](https://github.com/egyptguy)</strong>

## Disclaimer

THIS APPLICATION IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, CONSEQUENTIAL OR SIMILAR DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS APPLICATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

SUBJECT TO THE FOREGOING, THIS APPLICATION MAY BE FREELY REPRODUCED, DISTRIBUTED, TRANSMITTED, USED, MODIFIED, BUILT UPON, OR OTHERWISE EXPLOITED BY OR ON BEHALF OF SALESFORCE.COM OR ITS AFFILIATES, ANY CUSTOMER OR PARTNER OF SALESFORCE.COM OR ITS AFFILIATES, OR ANY DEVELOPER OF APPLICATIONS THAT INTERFACE WITH THE SALESFORCE.COM APPLICATION, FOR ANY PURPOSE, COMMERCIAL OR NON-COMMERCIAL, RELATED TO USE OF THE SALESFORCE.COM APPLICATION, AND IN ANY WAY, INCLUDING BY METHODS THAT HAVE NOT YET BEEN INVENTED OR CONCEIVED.
