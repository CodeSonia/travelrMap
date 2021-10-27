# Testing

## Testing Tools

### Google Developer Tools
Throughout development, I used Google Developer Tools to help identify any errors that I faced. For example, the developer tools alerted me that my variables in my JavaScript files were not defined, ths helped rectify tedious issues. It also helped be debug and test functions and the logic.

In conjunction, the developer tools has a responsive feature. This was a handy tool during development, as it showed me how TravelrMap looked across several devices. This was insightful, as it alerted me of issues like overlapping elements which can impact user experience.

[Back to Testing Tools](#testing-tools)

[Back to Top](#testing)

### HTML Validator
To help validate my HTML, I used W3C validator tool to ensure my HTML was clean. I regularly checked during development each section, ensuring my code was free from error.

A couple of errors highlighted and rectified:

- ` Warning: The type attribute is unnecessary for JavaScript resources.` 

  __Solution__
  - I rectified this by removing the `type="text/javascript"`. After removing this, I checked if the contact form was still working and operated to which it did.

- `: An img element must have an alt attribute, except under certain conditions.` 

  __Solution__
    - I rectified this by providing the alt tag. Whenever I declare an img element, I have been adding the alt tag, however, I need to harness this further and ensure I am not missing this out. I understand how the `alt tag` is incredibly important for assessibility.

- ` Element legend not allowed as child of element div in this context`. 

  __Solution__
  
  - I rectified this by moving the legend tag and directly under fieldset element.` I used these semantic elements to help users identify the form and input elements.

The below shows that there are currently no errors to be found in index.html.

![HTML validator results](assets/readme_images/html_validator.png)

I also checked the 404.html page, and there are also no errors:

![HTML validator results for 404.index](assets/readme_images/404_html_check.png)

[Back to Testing Tools](#testing-tools)

[Back to Top](#testing)

### CSS Validator 
In order to ensure my CSS was free from errors, I used W3C validator. All CSS files were free from any error:

![CSS validator results](assets/readme_images/css_validator.png)

[Back to Testing Tools](#testing-tools)

[Back to Top](#testing)

### Responsive Tools
Although, Google Developer Tools on the inspect feature, you can view your site on different devices, I further wanted to ensure my site is mobile-friendly and responsive. Also, as I do not have extensive devices, this was imperative to ensure my site is responsive. 

I used [Am I Responsive](http://ami.responsivedesign.is/) and [Responsinator](https://www.responsinator.com/) to ascertain if my site is responsive or not. I used this in conjunction with Google Developer Tools during development and added media queries to ensure my site behaved as expected. This was great as it helped rectify any alignment issues.

[Back to Testing Tools](#testing-tools)

[Back to Top](#testing)


