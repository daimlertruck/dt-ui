## Daimler Inner Source Risk Self Assessment

### Clearing Code for Rights and Information Classification
- [x] If the source code in your repository has not been explicitly classified, it is usually treated as internal, availability - standard and integrity - standard. If the source code in your repository has been explicity classified, its classification must **not** be **higher** than internal, availability - standard and integrity - standard.
Note: The information classification of the data processed by your source code does not necessarily apply to the source code itself. If in doubt, you may classify source code separately and explicitly according to Daimler’s process for information classification (https://social.intra.corpintra.net/docs/DOC-115888).
- [x] Your repository does **NOT** include proprietary **third-party** software/source code, i.e. software which is the property of another party, which is not part of the Daimler Group. This could be commercial off-the-shelf software, or background software of a supplier which has been delivered only to run Daimler code.
Make sure that you have obtained the exclusive rights to distribute and modify the source code and/or content in your repository, meaning you need to be entitled to use the source code and/or content as you wish to. This is usually the case if the source code was acquired via a purchase order which was covered by AEB-IT including the full Addendum H – unless the Addendum has been modified. In case a third party delivered the software to you, you may want to consult the contract governing the delivery of the source code or your responsible procurement contact or purchasing department to check your rights. This is essential to ensure that users of GitHub Enterprise can use your code as they wish.
- [x] Your code is free from Daimler patents, both from software patents or process patents. 
- [x] If your repository includes FOSS components, ensure clear and transparent documentation in your repository. All license requirements of the FOSS components must be complied with at all times. Please be aware that anybody developing in your repository might “develop into” the FOSS component, which can lead to loss of Intellectual Property. It is therefore recommended to refrain from uploading repositories with copyleft licenses.

### Ensuring IT Security
- [x] Your code and repository must be free from ...
   - Real personal data and personally identifiable Information (data privacy) (does not apply to commit messages and user IDs of commits);
   - Real system passwords;
   - API Keys, private certificates, private keys, signature keys, deploy keys (e.g. AWS keys, etc.), secret handles for webhooks, user tokens, cryptographic code etc.;
   - Information that is secret or confidential;
   - ... (non-exhaustive list, you may want to exclude further information before going "public" or "internal").

### Tax self-assessment
Please check the checkboxes if you can answer the question in an affirmative way and do not forget to give an explanation in the **comment to this issue**
- [x] Do you **expect to receive contributions** to your repository from others within the Daimler Inner Source Community? (Background: One key element of publications on the Daimler Inner Source Platform is the idea of “share something and get back so much more” – meaning you expect exchange on your repository including, e.g. contributions by others)
- [x] If no Daimler specifics were included in the code and no adaptations were necessary, **would you agree to share it free-of-charge, also with third parties** of the general Open Source community?
- **Please explain why it is possible that other users and entities are capable of contributing** to your project by **pasting one or several reasons** from the below list **in the comment to this issue**. If in doubt, please talk to your Product Owner. 
   - others submit a patch to fix a bug
   - others provide contributions to the code base for changes
   - others provide complete features for inclusion in the upstream
   - others report issues with a provided release
   - others share ideas and suggestions for the evolution of the project
   - others provide changes or refactorings to improve the software design or increase the reusability of the software

*Please find more Information regarding the tax self-assessment in the [FOSS Wiki](https://wiki.e.corpintra.net/x/ceHtHQ).*

### Final Remarks and Checks
- [x] Once you have set your repository to “public” or "internal", you have to monitor the repository continuously. Any changes regarding the issues filed by this bot have to be addressed. If necessary, the repository must be set back to “private”. The requirements self-assessed in previous checks must be met throughout the whole software lifecycle process.
- [x] Use your common sense and your gut feeling. Is your repository ready to go “public” or "internal"? Do you want your repository to be seen by others? Have you completed the self-assessment with all checkboxes and complied with all requirements? General local legal requirements and/or your entities rules and regulations also apply to GitHub Enterprise, e.g. if you come across a conversation that would imply anti-trust relevance, you would have to address in line with Daimler anti-trust requirements to antitrust@daimler.com. Then you are ready to go. Check this checkbox if you want to go “public” or "internal".

*Please find more Information on our [Wiki](https://wiki.e.corpintra.net/pages/viewpage.action?pageId=284263285) and if you have any questions, post a comment on the [FOSS Wiki](https://wiki.e.corpintra.net/pages/viewpage.action?pageId=284263285).*
