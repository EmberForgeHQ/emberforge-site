const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
const form=document.getElementById('supportForm');
if(form){
 const fields={type:document.getElementById('requestType'),email:document.getElementById('replyEmail'),trying:document.getElementById('trying'),expected:document.getElementById('expected'),actual:document.getElementById('actual'),extra:document.getElementById('extra')};
 const status=document.getElementById('formStatus');
 const report=()=>[`Request type: ${fields.type.value}`,`Reply email: ${fields.email.value.trim()||'Not provided'}`,'','What I was trying to do:',fields.trying.value.trim()||'(not provided)','','What I expected:',fields.expected.value.trim()||'(not provided)','','What happened instead:',fields.actual.value.trim()||'(not provided)','','Anything else:',fields.extra.value.trim()||'(not provided)'].join('\n');
 document.querySelectorAll('[data-support-type]').forEach(a=>a.addEventListener('click',()=>{fields.type.value=a.dataset.supportType;setTimeout(()=>fields.trying.focus(),150)}));
 document.getElementById('openEmail')?.addEventListener('click',()=>{window.location.href=`mailto:ever_forge@outlook.com?subject=${encodeURIComponent('EmberForge '+fields.type.value)}&body=${encodeURIComponent(report())}`;status.textContent='Opening your email app…'});
 document.getElementById('copyReport')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(report());status.textContent='Report copied.'}catch{status.textContent='Copy failed. Select the text manually.'}});
}
