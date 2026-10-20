export const story = {
  interview: {speaker:'Recruiter',text:'Thank you for your application to Northstar Demo Ltd. We would like to arrange an interview. You may confirm this invitation through the careers contact on our company website.',options:[
    {text:'Locate the company website independently and confirm the invitation',next:'confirmed',lesson:'Verifying a plausible offer helps you proceed with evidence rather than guessing.'},
    {text:'Accept based only on the sender’s display name',next:'recheck',lesson:'A reasonable message can still be impersonated. A quick independent check is useful.'}]},
  recheck: {speaker:'Your reflection',text:'The invitation sounds ordinary, but you have not yet confirmed the sender or vacancy. What would you do before sending further personal details?',options:[
    {text:'Contact the careers team using details found independently',next:'confirmed',lesson:'The specific invitation matters. Confirming a company exists alone is not enough.'},
    {text:'Decline without sharing more information',next:'declined',lesson:'You control whether to pursue an opportunity. Declining does not establish that the offer was fraudulent.'}]},
  confirmed:{end:true,title:'You verified and can make an informed choice.',text:'In this fictional scenario, the independently contacted careers team confirms the role and interview. You can proceed through the confirmed official channel while continuing to protect sensitive information.',tone:'success'},
  declined:{end:true,title:'You chose not to proceed.',text:'That is your choice. This scenario does not establish fraud. Independent verification can help you decide whether a future opportunity is worth pursuing.',tone:'success'},
  start: {speaker:'Recruiter', text:'Hi! We are recruiting remote product reviewers. Earn RM300 a day in your spare time. Are you interested?', options:[
    {text:'Ask for the employer and role details', next:'details', lesson:'Asking questions is useful. The answers still need independent verification.'},
    {text:'Accept immediately', next:'trial', lesson:'Accepting quickly can skip verification. You can still pause at the next step.'},
    {text:'Decline the offer', next:'exit', lesson:'You can decline an unsolicited offer without continuing the conversation.'}]},
  details: {speaker:'Recruiter',text:'We work with Northstar Demo Ltd. Here is a logo. Join our task group first and we will explain everything.',options:[
    {text:'Find the employer independently and confirm the role',next:'verified',lesson:'Independent contact checks the specific recruiter and vacancy, not just whether a company exists.'},
    {text:'Trust the logo and join the tasks',next:'trial',lesson:'Logos can be copied. They are not evidence that the sender is authorised.'}]},
  trial: {speaker:'Recruiter',text:'Great! You completed the sample review. We have sent RM20. Deposit RM300 now to unlock premium tasks and withdraw your full earnings.',options:[
    {text:'Stop payments and verify the offer',next:'stopped',lesson:'A small payout does not make a larger deposit safe.'},
    {text:'Pay RM300 to unlock the tasks',next:'more',lesson:'This decision increases exposure. Money already paid is not a reason to send more.'},
    {text:'Ask whether the deposit is refundable',next:'refund',lesson:'A promise from the same person is not independent verification.'}]},
  refund: {speaker:'Recruiter',text:'Absolutely refundable! There are only two places left. Pay in ten minutes or lose the balance.',options:[
    {text:'Pause; refuse the deposit',next:'stopped',lesson:'Urgency should prompt a pause, not an automatic payment.'},
    {text:'Pay to avoid losing the balance',next:'more',lesson:'The deadline and threatened loss are pressure tactics. You can still stop.'}]},
  more: {speaker:'Recruiter',text:'Your withdrawal is frozen. Transfer another RM800 as a release fee, or let us use your account to receive client payments.',options:[
    {text:'Stop, keep evidence, and contact my bank or 997',next:'help',lesson:'Prompt support and no further payments reduce additional exposure.'},
    {text:'Let them use my account instead',next:'account',lesson:'Account access can expose you and other people to further harm.'}]},
  verified:{end:true,title:'You checked beyond the conversation.',text:'In this fictional story, the independently contacted employer confirms there is no such vacancy. You stop before paying.',tone:'success'},
  stopped:{end:true,title:'You interrupted the pressure.',text:'You chose to stop before paying a task deposit. Keep using independent checks for future offers.',tone:'success'},
  exit:{end:true,title:'You kept control of the decision.',text:'You chose not to pursue the offer. If you consider another opportunity, confirm the employer and vacancy independently.',tone:'success'},
  help:{end:true,title:'You chose the next safer action.',text:'Earlier decisions do not prevent you from seeking help. In a real incident, contact your bank or NSRC 997 promptly and follow their guidance.',tone:'caution'},
  account:{end:true,title:'Pause before any more account activity.',text:'Do not receive or forward money for the recruiter. If you shared account access, contact your bank promptly using a trusted device. You can ask for help without completing this game.',tone:'caution'},
};
