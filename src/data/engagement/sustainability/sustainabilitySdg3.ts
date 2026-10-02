/**
 * Sustainability — SDG 3: Good Health and Well-being (SCALE chapter 4.1).
 *
 * Source: 文案集/engagement/sustainability/6.3 Sustainability wiki定稿.md
 * Copy is verbatim; pure data, zero JSX.
 */

import {
  pdfPair,
  type SdgChapter,
  type StakeholderProfile,
} from "./sdgChapterContract";

/* ----------------------------------------------------------------------------
 * SDG 3 — S: stakeholder profiles
 * -------------------------------------------------------------------------- */

const sdg3Profiles: ReadonlyArray<StakeholderProfile> = [
  {
    id: "sdg3-li-chengli",
    index: "01",
    name: "Dr. Chengli Li",
    role: "Clinical Oncology",
    relevantStakeholder:
      "A clinician experienced in cancer care and treatment decision-making, offering insight into the needs of patients at different stages of TNBC.",
    challenge: "Should reducing side effects be the primary goal of cancer treatment?",
    keyInsight:
      "For patients with TNBC who have undergone surgery, recurrence and metastasis remain major concerns. A new adjuvant treatment must therefore offer meaningful clinical benefits. Safety matters, but reducing side effects should not come at the expense of efficacy.",
    whatChanged:
      "We sharpened CirCure’s focus on **adjuvant treatment for TNBC after surgery**, identifying reduced recurrence and metastasis risk and improved long-term survival as the key outcomes to pursue. This established our guiding principle: **prioritize efficacy, optimize safety**.",
    currentStatus: "Incorporated",
    sdgs: [3, 9],
    article: {
      title: "After Surgery, What Matters Most Is Reducing Recurrence and Living Longer.",
      sections: [
        {
          blocks: [
            "Early in the project, we described CirCure in broad terms: a potential new therapeutic approach for TNBC, with an emphasis on the possible safety advantages of circRNA vaccines. Our conversation with Dr. Chengli Li revealed a fundamental gap in this framing: **patients at different stages of TNBC have different needs.**",
          ],
        },
        {
          heading: "01 First, Define Whom We Aim to Help",
          blocks: [
            "Dr. Li began by emphasizing that **the clinical needs of patients with TNBC vary with the stage of their disease.**",
            "For patients who have undergone surgery, removal of the primary tumor does not eliminate the risk of recurrence and metastasis. The key question at this stage is whether a new adjuvant therapy can build on existing treatment to **further reduce recurrence and metastasis and deliver more sustained disease control and long-term benefits**, rather than whether it can shrink the tumor. Once cancer has recurred or metastasized, the focus shifts toward controlling disease progression and finding additional effective treatment options.",
            "This distinction led us to reconsider CirCure’s intended clinical setting. We narrowed our focus from patients with TNBC in general to **those who have undergone surgery but remain at risk of recurrence and metastasis**, positioning CirCure as a potential adjuvant therapeutic strategy following surgery.",
          ],
        },
        {
          heading: "02 “Fewer Side Effects” Is Not Enough",
          blocks: [
            "When we first introduced CirCure, we emphasized the possibility that circRNA vaccines might cause “fewer side effects.” Dr. Li’s response was direct: **for patients with cancer, the first question is whether a treatment works.** A new adjuvant therapy that offers clear improvements in disease control and reduces the risk of recurrence and metastasis may be worth considering despite some side effects, provided the risks are acceptable. Safety remains important, but **the possibility of fewer side effects alone does not establish a treatment’s value when its efficacy is still uncertain.**",
          ],
        },
        {
          heading: "03 Reordering Our Evaluation Priorities",
          blocks: [
            "After this discussion, we shifted our emphasis from “fewer side effects” to **prioritizing efficacy and optimizing safety**. Demonstrating antigen expression from circRNA and the induction of an immune response are experimental validation tasks for CirCure at its current stage. From a patient perspective, the more important question is whether these findings could ultimately support **a therapeutic approach that reduces recurrence and metastasis after surgery and improves long-term outcomes**. We cannot demonstrate these outcomes at this stage. They are **directions for future evaluation** that Dr. Li helped us define.",
            "The interview therefore prompted us to clarify two fundamental questions:",
            "**Whom do we ultimately want CirCure to serve?** — Patients with TNBC who remain at risk of recurrence and metastasis after surgery.",
            "**What should we assess first when judging its value?** — Whether it can deliver sufficient therapeutic benefit, while pursuing further improvements in safety and patient acceptability.",
            "These questions defined what we needed to learn next from patients. Before approaching patients and their families, however, we also considered how these sensitive conversations should be conducted responsibly. This led us to consult Runhui Tian on patient communication and humanistic care.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg3-tian-runhui",
    index: "02",
    name: "Runhui Tian",
    role: "Patient Communication & Humanistic Care",
    relevantStakeholder:
      "Experienced in patient communication, helping us understand how to approach sensitive conversations with patients and their families.",
    challenge: "How can we engage patients without causing additional emotional distress?",
    keyInsight:
      "Sensitive topics should be discussed with respect for patients’ emotional boundaries, avoiding intrusive questions and allowing them to decline topics they do not wish to discuss.",
    whatChanged:
      "Before interviewing patients and their families, we adjusted our communication approach by using open, non-judgmental questions and incorporating humanistic care into our engagement principles.",
    currentStatus: "Incorporated",
    sdgs: [3],
    article: {
      title: "Before Asking Patients, We First Learned How to Listen",
      sections: [
        {
          blocks: [
            "As CirCure gradually became more focused on patients with TNBC after surgery, we wanted to hear directly from patients and their families about recurrence, treatment burden, quality of life, and their expectations for a new adjuvant therapy. However, these topics are closely connected to personal experiences of illness, treatment, uncertainty, and family pressure. Before beginning these conversations, we first asked an important question: **how should we approach patients and their families without turning stakeholder engagement into another source of emotional burden?**",
          ],
        },
        {
          heading: "01 Not Every Question Needs to Be Asked",
          blocks: [
            "In our discussion with Runhui Tian, we were reminded that communication with patients should not be treated in the same way as an ordinary project interview. Questions about recurrence, prognosis, treatment side effects, financial pressure, and family responsibilities may bring patients back to difficult experiences. Even when such questions are relevant to our project, relevance alone does not justify repeatedly probing sensitive experiences.",
            "This prompted us to distinguish between information that would genuinely help us understand patient needs and questions that were merely interesting to us. We avoided unnecessarily detailed questions about painful experiences and did not pursue topics when interviewees showed hesitation or discomfort.",
          ],
        },
        {
          heading: "02 Give Patients Control Over the Conversation",
          blocks: [
            "Another important principle was to allow patients and family members to decide how much they wished to share. During later interviews, we used more open-ended and non-judgmental questions, avoided suggesting what the “right” answer should be, and made it clear that sensitive questions could be skipped.",
            "The goal was not to obtain the maximum amount of information, but to create a conversation in which participants could express what they considered important at their own pace.",
          ],
        },
        {
          heading: "03 What Changed | From “Collecting Feedback” to Respectful Engagement",
          blocks: [
            "This conversation changed the way we understood patient engagement. We initially focused mainly on **what we wanted to learn from patients**. Afterward, we also began asking **how the process of asking might affect them**.",
            "We therefore incorporated respect, emotional sensitivity, voluntary participation, and the right not to answer into our patient and family interviews. These principles subsequently guided our discussions about recurrence, quality of life, treatment burden, affordability, and family impact.",
            "For us, this became an important part of SDG 3: improving health and well-being is not only about designing better treatments, but also about ensuring that the people whose experiences inform our work are approached with dignity and care.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg3-tnbc-patients",
    index: "03",
    name: "TNBC Patients",
    role: "Target Patients",
    relevantStakeholder:
      "As CirCure’s potential users and direct beneficiaries, patients can offer firsthand perspectives on whether an additional treatment after surgery is worth pursuing.",
    challenge: "What makes an additional postoperative treatment worth accepting?",
    keyInsight:
      "Patients’ main priorities remain reducing the risk of recurrence and metastasis and improving long-term survival. Their willingness to undergo additional treatment also depends on **side effects, quality of life, cost, the impact on their families, and trust in new technologies**.",
    whatChanged:
      "We recognized that efficacy is a prerequisite for patients to consider additional treatment after surgery, but **“effective” does not automatically mean “worth accepting.”** Patients also weigh the expected benefits against the **physical, practical, and financial burdens** of treatment.",
    currentStatus: "Incorporated",
    sdgs: [3, 9, 10],
    article: {
      title: "What Makes a Treatment Worthwhile for Patients?",
      sections: [
        {
          blocks: [
            "Dr. Chengli Li helped us clarify the clinical priorities for patients with TNBC after surgery, while Runhui Tian helped us approach these conversations with greater sensitivity and respect. We then spoke directly with four patients with TNBC or breast cancer to understand how they themselves evaluate treatment value. Beyond whether a treatment works, we asked a more patient-centered question: are its expected benefits worth the physical, psychological, and practical burdens it may bring?",
          ],
        },
        {
          heading: "01 Efficacy Remains the Central Expectation",
          blocks: [
            "Recurrence and metastasis were among the concerns raised most often in our conversations. For patients who had already undergone surgery and treatment, the possibility of the cancer returning was not an abstract clinical outcome. It remained a daily-life concern after treatment had ended.",
            {
              quotes: [
                {
                  speaker: "Patient A",
                  text: "“Of course I would worry about side effects, but I am more afraid of the cancer coming back. If a treatment could really lower that risk and help me live longer, I would accept it as long as I could manage the side effects.”",
                },
                {
                  speaker: "Patient C",
                  text: "“After treatment ends, what worries me most is not knowing whether or when the cancer might come back. If a new treatment could substantially reduce the chance of it returning or spreading, I might be more willing to accept some short-term side effects.”",
                },
              ],
            },
            "These conversations reinforced our earlier understanding: for patients after surgery, **a sufficiently clear therapeutic benefit is the starting point for deciding whether an additional treatment is worth considering.** Their answers, however, also revealed further considerations.",
          ],
        },
        {
          heading: "02 “Prioritizing Efficacy” Does Not Mean Ignoring Other Burdens",
          blocks: [
            "When we asked what side effects they would be willing to accept in exchange for treatment benefits, their answers became more nuanced.",
            {
              quotes: [
                {
                  speaker: "Patient B",
                  text: "“I do not think living longer makes every side effect acceptable. If a treatment left me very weak, in pain for a long time, or completely unable to look after myself, I would question whether it was worth it.”",
                },
                {
                  speaker: "Patient D",
                  text: "“I might be able to accept short-term discomfort. But if the side effects meant I could not work or care for my children and family for a long time, that would really concern me.”",
                },
              ],
            },
            "The patients distinguished between temporary discomfort they could recover from and lasting effects on their work, family responsibilities, and everyday lives. Their decision was not simply a choice between efficacy and safety. It was a question of **how much they stood to gain and what they would have to bear in return**.",
            "This deepened our understanding of “prioritizing efficacy and optimizing safety”: **efficacy is essential, but willingness to undergo treatment also depends on whether the benefits justify the risks and the impact on daily life.**",
          ],
        },
        {
          heading: "03 The Burden Extends Beyond Physical Risks",
          blocks: [
            "Treatment decisions also reflect patients’ financial and family circumstances. Costs, family burdens, and uncertainty about whether a new technology has been adequately tested can all influence their choices.",
            {
              quotes: [
                {
                  speaker: "Patient C",
                  text: "“Besides the side effects, I would think about the price. Even if the medicine worked very well, I would have to turn it down if my family could not afford it.”",
                },
                {
                  speaker: "Patient A",
                  text: "“If it were a new vaccine or treatment, I would want to know whether it had been thoroughly tested. Of course it needs to work, but I would also worry about long-term side effects that have not been discovered yet.”",
                },
              ],
            },
            "These responses showed us that **an effective treatment is not automatically one that patients are willing or able to access**.",
            "An additional treatment after surgery can place new demands on patients’ bodies, time, and finances. With a newer technology, patients also need sufficient trust before they can consider it a viable treatment option.",
          ],
        },
        {
          heading: "04 What Changed | From “Does It Work?” to “Is It Worthwhile, and Can Patients Access It?”",
          blocks: [
            "The patient interviews clarified a central lesson: **a treatment must be effective, but patients must also feel that its benefits justify the burdens they would bear.** We therefore understood Dr. Chengli Li’s emphasis on “prioritizing efficacy” as a starting point, not as placing efficacy above all other considerations. The benefit must be meaningful, side effects must not unduly compromise quality of life, and financial burdens must not put treatment beyond the reach of patients who would otherwise accept it. Repeated concerns about costs also sharpened our understanding of affordability: what mattered to these patients was not simply the treatment’s price, but **how much they would ultimately have to pay out of pocket**.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg3-family-caregivers",
    index: "04",
    name: "Family Caregivers",
    role: "Family Burden & Long-term Care",
    relevantStakeholder:
      "As a primary source of support during treatment and recovery, family caregivers witness changes in patients’ daily lives. They also share **treatment costs, caregiving responsibilities, work adjustments, and the ongoing emotional strain of possible recurrence**.",
    challenge: "When treatment affects the whole family, what makes it truly worth accepting?",
    keyInsight:
      "Families also prioritize **effective treatment and a lower risk of recurrence and metastasis**. But they weigh other factors too: whether patients can return to work and everyday life, whether long-term care will be needed, whether additional treatment is affordable, and how uncertainty about recurrence affects the family’s emotional well-being.",
    whatChanged:
      "Caregiver feedback highlighted that treatment benefits extend beyond the patient. We broadened CirCure’s long-term impact assessment to consider **financial burden, caregiving demands, return to work and daily life, and family anxiety about recurrence**. This expanded our understanding of treatment acceptability to include the whole family’s experience.",
    currentStatus: "Incorporated",
    sdgs: [3, 10],
    article: {
      title: "Interviews with Patients’ Family Members | Treatment Affects More Than the Patient",
      sections: [
        {
          blocks: [
            "Our patient interviews showed how patients weigh efficacy, side effects, quality of life, and financial burdens. Illness and treatment, however, also affect the people around them. Surgery, subsequent treatment, follow-up examinations, and ongoing worries about recurrence become part of the whole family’s life.",
            "We therefore gathered perspectives from patients’ family members, drawing on their caregiving experiences to ask: **what matters most to families when a new adjuvant therapy following surgery is added to existing treatment?**",
          ],
        },
        {
          heading: "01 Efficacy Remains the Family’s First Consideration",
          blocks: [
            "Like patients, family members first want to know whether a treatment can deliver meaningful benefits, particularly by reducing recurrence and metastasis.",
            {
              quotes: [
                {
                  text: "“Of course, what we want most is for the treatment to work, lower the chance of the cancer coming back, and help her live longer. But we also think about whether she will be able to live normally afterward. If the side effects are severe and she needs us to care for her for a long time, that would put a lot of pressure on the whole family.”",
                },
              ],
            },
            "For family members, **treatment efficacy remains a prerequisite**. Their concerns also extend beyond clinical outcomes to the patient’s life after treatment.",
          ],
        },
        {
          heading: "02 Treatment Burdens Become Family Burdens",
          blocks: [
            "Patients do not bear treatment costs and side effects alone. When treatment prevents someone from working for an extended period or creates a need for ongoing care, the consequences extend to the whole family.",
            {
              quotes: [
                {
                  text: "“If it really works, we would certainly try to find a way to get her treated. But we have to think about the cost too. If she needs an expensive treatment for a long time, for an ordinary family it may not be about whether we want it, but whether we can actually afford it.”",
                },
                {
                  text: "“Her illness has changed life for all of us, not just her. Of course we want the treatment to work and stop the cancer from coming back, but we also worry about whether the side effects will affect her everyday life and work. Controlling the disease matters to us, and so does helping her get back to her previous life as much as possible.”",
                },
              ],
            },
            "These perspectives highlighted three further considerations in treatment value: **what the family can afford, how much care the patient will need, and whether the patient can return to everyday life**.",
          ],
        },
        {
          heading: "03 Uncertainty About Recurrence Affects the Whole Family",
          blocks: [
            "Worries about recurrence do not end when treatment does. Patients continue to face follow-up examinations and uncertainty about their disease, with family members sharing these experiences over time.",
            {
              quotes: [
                {
                  text: "“Even after treatment ends, we still worry about the cancer coming back. We get very anxious before every follow-up appointment. If a new treatment could really lower the chance of the cancer returning or spreading, we might accept it even if the treatment process were a little more complicated.”",
                },
              ],
            },
            "This helped us understand why patients after surgery and their families place such importance on **the risk of recurrence and metastasis**. Reducing that risk matters both for future disease control and for rebuilding a more stable life.",
          ],
        },
        {
          heading: "04 What Changed｜From Patient Benefits to Family Impacts",
          blocks: [
            "Family members’ feedback reinforced CirCure’s principle of **prioritizing efficacy and optimizing safety**, while broadening the scope of our evaluation of long-term health value.",
            "If an additional treatment after surgery becomes part of patients’ lives, its effects may extend beyond therapeutic benefits to **household spending, caregiving needs, work arrangements, and long-term psychological stress**. Our analysis of CirCure’s potential social and economic impacts therefore expanded from the burdens on individual patients to their wider effects on families. **Treatment costs** again emerged as a recurring concern shared by patients and family members. This led us to ask: **how much of the treatment’s price would patients and families ultimately have to pay themselves?**",
            "Together, these conversations showed that **the value of an adjuvant therapy following surgery extends beyond efficacy into the everyday lives of patients and families.** Patients weigh side effects, quality of life, and costs. Family members may also face additional expenses, caregiving responsibilities, changes to work arrangements, and the psychological strain of prolonged uncertainty about recurrence. Affordability therefore involves more than a price tag. It depends on whether patients and families can bear the additional treatment burden and whether treatment is a realistic option for them. Drawing on the perspectives of clinicians, patients, and family members, we identified three real-world issues that CirCure aims to address:",
            {
              bullets: [
                "**Recurrence and metastasis after surgery remain persistent concerns for patients and families.** Surgery does not end the need for treatment. For patients with TNBC, the risk of recurrence and metastasis continues to affect future health and creates lasting uncertainty for families. Further reducing these risks remains a primary goal of adjuvant therapy.",
                "**Long-term patient benefits matter more than any single experimental result.** Antigen expression, immune activation, and other experimental indicators are not the ultimate goal. Their value lies in whether they could eventually support **more sustained disease control, a lower risk of recurrence and metastasis, and long-term survival benefits**, while helping patients return as fully as possible to work, family life, and daily activities.",
                "**Treatment must be effective, acceptable, affordable, and accessible to patients and families.** Additional treatment can bring side effects, disruption to daily life, new expenses, and caregiving demands. Whether a technology delivers real-world health value depends on patients’ willingness to undergo treatment, families’ ability to bear its burdens, and the support available through health insurance, supplementary coverage, and healthcare resources. We therefore incorporated **safety, quality of life, patient acceptability, family burden, and treatment accessibility** into CirCure’s long-term evaluation.",
              ],
            },
            "Patients and families helped us understand whether an additional postoperative treatment would be worth accepting. We next asked a different question: even if patients considered it worthwhile, could they realistically afford and access it? This shifted our attention from treatment value itself to the conditions that determine whether that value can actually reach patients. We therefore consulted stakeholders involved in healthcare payment, insurance, and resource access.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg3-wang-jianguo",
    index: "05",
    name: "王建国",
    role: "Healthcare Payment & Reimbursement",
    relevantStakeholder:
      "With expertise in health insurance policy, medical billing, and reimbursement, he helped us understand how treatment prices translate into actual costs for patients.",
    keyInsight:
      "A new treatment’s availability does not guarantee adequate insurance coverage. What patients ultimately pay depends on **coverage, reimbursement policies, eligibility requirements, and cost-sharing arrangements**.",
    whatChanged:
      "We shifted from assessing affordability by treatment price alone to considering **patients’ actual out-of-pocket costs after insurance reimbursement**. Until CirCure’s pricing and insurance coverage are clear, we cannot assume it will be affordable for patients.",
    currentStatus: "Incorporated",
    sdgs: [3, 10],
    article: {
      title: "What Treatment Costs Is Not What Patients Pay",
      sections: [
        {
          blocks: [
            "Treatment costs came up repeatedly in our patient interviews. Further discussion revealed that patients were often less concerned with a medicine’s listed price than with **how much they would ultimately have to pay out of pocket after insurance reimbursement**. For patients with TNBC who have already undergone surgery and standard treatment, adding another adjuvant therapy could create expenses that directly influence whether they can take it up.",
            "We therefore consulted hospital staff involved in health insurance administration to understand how far insurance could help cover patients’ costs once a new treatment enters clinical use.",
          ],
        },
        {
          heading: "01 Treatment Availability Does Not Guarantee Insurance Coverage",
          blocks: [
            "The discussions clarified that a treatment can enter clinical use before it is covered by basic medical insurance. Coverage depends on further evaluation and policy processes. In the meantime, patients may have to pay a substantial share of the costs themselves, even when the treatment is available. Nor does coverage result in the same financial burden for everyone: the amount patients pay depends on **specific reimbursement policies, coverage conditions, and individual circumstances**. We therefore separated what we had broadly called “treatment costs” into two questions: **How much does the treatment cost?** And **how much will the patient actually pay?** The second is more directly relevant to whether patients can access it.",
          ],
        },
        {
          heading: "02 Additional Costs Matter in Adjuvant Therapy Following Surgery",
          blocks: [
            "CirCure is intended for patients with TNBC who have undergone surgery but remain at risk of recurrence and metastasis. If it eventually becomes an additional adjuvant therapy within their treatment pathway, its cost would come on top of the expenses they already face. Even if it offers promising therapeutic benefits, high additional out-of-pocket costs could prevent some patients from receiving it. This sharpened our understanding of accessibility: **the question is not only whether a treatment is available, but who can actually access it**.",
          ],
        },
        {
          heading: "03 What Changed",
          blocks: [
            "The discussion prompted us to revise a key assumption: **a treatment’s price alone does not establish whether patients can afford it**.",
            "What more directly shapes patients’ financial burden is the amount they must pay out of pocket after insurance reimbursement. Without actual pricing and coverage information, we therefore do not claim that CirCure is affordable based solely on potential production costs, anticipated prices, or the possibility of future insurance coverage.",
            "The conversation also raised a further question: **what other forms of support could help patients meet treatment costs beyond basic medical insurance?**",
            "If basic medical insurance does not fully cover the additional costs and patients still face substantial out-of-pocket expenses, could supplementary coverage help? To explore this possibility, we spoke with Jing Wen, a commercial health insurance professional.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg3-wen-jing",
    index: "06",
    name: "Jing Wen",
    role: "Commercial Health Insurance",
    relevantStakeholder:
      "With expertise in specialty drug coverage and medical expense reimbursement, she helped us explore how private health insurance might help patients cover treatment costs beyond basic medical insurance.",
    challenge: "Who benefits from private health insurance when coverage varies from patient to patient?",
    keyInsight:
      "Private health insurance may cover some treatment costs through benefits such as specialty drug coverage. However, this support depends on **whether patients are insured, what their policy covers, whether the drug is eligible, and the specific claims requirements**. It is not available to everyone.",
    whatChanged:
      "We refined our understanding of private insurance: **it may make treatment more affordable for eligible patients, but it is not a universal solution to treatment costs.**",
    currentStatus: "Incorporated",
    sdgs: [3, 10],
    article: {
      title: "An Insurance Industry Perspective | What Support Exists Beyond Basic Medical Insurance?",
      sections: [
        {
          blocks: [
            "Our discussion with hospital insurance administrators showed us that a treatment’s price is not the same as what patients actually pay. Coverage and reimbursement under basic medical insurance determine how much patients must pay out of pocket. We then spoke with **Jing Wen**, a private health insurance professional, to explore how much additional support private insurance could provide.",
          ],
        },
        {
          heading: "01 — Additional Coverage, but Not for Everyone",
          blocks: [
            "Jing Wen explained that some private health insurance policies include **specialty drug coverage**. Under these policies, certain innovative medicines may qualify for partial reimbursement. This could ease the financial pressure on patients whose treatment is not adequately covered by basic medical insurance. **However, this support comes with specific conditions.**",
            "Patients must hold a suitable policy, the policy must include the relevant benefits, and the drug and claim must meet its coverage requirements. These factors determine whether patients receive support and how much. Private insurance can therefore supplement basic medical insurance, but patients cannot assume this support will be available to them.",
          ],
        },
        {
          heading: "02 — The Same Treatment Can Mean Different Costs for Different Patients",
          blocks: [
            "The discussion also highlighted how patients’ insurance arrangements can differ. Some have both basic medical insurance and private coverage; others rely on basic medical insurance alone. Even among privately insured patients, benefits and claims requirements vary.",
            "**The same treatment price does not mean the same out-of-pocket cost for every patient.** For an additional treatment after surgery, these differences may affect both patients’ willingness and their ability to proceed.",
          ],
        },
        {
          heading: "03 — What Changed",
          blocks: [
            "Jing Wen’s feedback challenged an assumption we had made too broadly: **the existence of private insurance does not mean that patients can access financial support.**",
            "Private health insurance can offer additional protection, but only when patients meet the relevant policy and coverage requirements. For CirCure, **it may improve affordability for some patients, but it cannot resolve wider disparities in treatment costs and access.**",
            "**Yet being able to afford treatment does not necessarily mean being able to access it.** Healthcare resources, the practical requirements for delivering treatment, and differences in access across regions and populations also shape who can benefit from a new adjuvant therapy. We therefore sought perspectives from experts in medicine, oncology, and public health to better understand CirCure’s potential implications for **patient benefit, treatment access, and health equity**.",
          ],
        },
      ],
    },
  },
  {
    id: "sdg3-wang-lei",
    index: "07",
    name: "Lei Wang",
    role: "Healthcare Resources & Health Equity",
    relevantStakeholder:
      "Experienced in healthcare services and resource allocation, helping us consider whether new treatment options can realistically reach different patients.",
    challenge: "Can a treatment truly benefit patients if access depends on available healthcare resources?",
    keyInsight:
      "Treatment access depends not only on efficacy and affordability, but also on healthcare capacity, service availability, and patients’ opportunities to receive care.",
    whatChanged:
      "We expanded our understanding of accessibility from whether patients can afford treatment to whether they can realistically obtain it, incorporating healthcare resources and health equity into CirCure’s long-term evaluation.",
    currentStatus: "Incorporated",
    sdgs: [3, 10],
  },
  {
    id: "sdg3-yang-shujuan",
    index: "08",
    name: "Shujuan Yang",
    role: "Women’s Health & Disease Prevention",
    relevantStakeholder:
      "Experienced in women’s health and disease prevention, offering a broader perspective beyond treatment alone.",
    challenge: "Can improving breast cancer outcomes rely on treatment alone?",
    keyInsight:
      "Long-term health outcomes are influenced not only by treatment, but also by appropriate screening and earlier disease detection.",
    whatChanged:
      "While CirCure remains focused on postoperative TNBC treatment, we expanded our public engagement to include breast health, screening, and early detection.",
    currentStatus: "Incorporated",
    sdgs: [3, 4],
  },
  {
    id: "sdg3-jia-lin",
    index: "09",
    name: "Lin Jia",
    role: "Breast Cancer & Clinical Needs",
    relevantStakeholder:
      "Experienced in breast cancer pathology and tumor biology, helping us examine whether our technical design addresses a clearly defined clinical need.",
    challenge: "What patient need should CirCure ultimately address?",
    keyInsight:
      "The value of a new technology should be judged by the specific clinical problem it aims to solve, rather than by novelty alone.",
    whatChanged:
      "We further anchored CirCure to the unmet need of postoperative recurrence and metastasis in TNBC, keeping subsequent design and evaluation centered on this clinical problem.",
    currentStatus: "Incorporated",
    sdgs: [3, 9],
  },
  {
    id: "sdg3-cui-jiuwei",
    index: "10",
    name: "Jiuwei Cui",
    role: "Tumor Immunology",
    relevantStakeholder:
      "Experienced in tumor immunology, helping us distinguish immune activation from meaningful antitumor function.",
    challenge: "Does immune activation alone demonstrate therapeutic value?",
    keyInsight:
      "An immune response is only one step; meaningful evaluation should further examine whether it produces functional antitumor effects while maintaining acceptable safety.",
    whatChanged:
      "We separated immune activation, functional antitumor effects, and ultimate patient benefit as different levels of evidence, avoiding overinterpretation of individual immunological results.",
    currentStatus: "Incorporated",
    sdgs: [3, 9],
  },
  {
    id: "sdg3-zhao-gang",
    index: "11",
    name: "Gang Zhao",
    role: "TNBC Clinical Management",
    relevantStakeholder:
      "Experienced in breast cancer clinical management, providing a real-world perspective on how a new treatment would need to fit into existing care pathways.",
    challenge: "How could a new postoperative strategy fit into real TNBC clinical management?",
    keyInsight:
      "A new therapy cannot be considered in isolation; its target patients, timing, clinical purpose, and relationship with existing treatments and follow-up all need to be defined.",
    whatChanged:
      "We extended CirCure’s clinical positioning from simply asking “when would it be used?” to considering who should receive it, what problem it should address, and how it could eventually integrate into existing TNBC care.",
    currentStatus: "Incorporated",
    sdgs: [3, 9],
  },
  {
    id: "sdg3-global-youth",
    index: "12",
    name: "Global Youth in Health & Sustainable Development",
    relevantStakeholder:
      "Young practitioners from different countries, professional backgrounds, and fields of practice. Their experiences across social contexts and sustainability issues helped us recognize broader connections between health, technology, education, equity, and social development.",
    keyInsight:
      "Health extends beyond disease treatment. Disease prevention, the application of technology, access to health services, and social equity all shape who ultimately benefits from improvements in health.",
    whatChanged:
      "The exchange broadened our view of CirCure beyond SDG 3 to include connections between health goals and **technological innovation, disease prevention, access to health services, and social equity**. This cross-SDG perspective helped lay the foundation for our subsequent use of **SST-QN** to systematically analyze synergies, trade-offs, and conditional relationships among SDGs.",
    currentStatus: "Incorporated",
    sdgs: [3, 5, 9, 10, 17],
    leadIn: [
      "Our earlier discussions explored the health challenges relevant to CirCure through patient needs, treatment value, insurance coverage, and healthcare resources. As these conversations developed, we began to see how health connects with technology, education, equity, and the wider social environment. In June 2026, JLU-FBH was invited to the UNICEF-organized **2026 Acceleration Week for Global Youth Development Programps**. We saw this as an opportunity to explore the relationship between health and sustainable development through the perspectives of young people from around the world.",
    ],
    article: {
      title: "Connecting Health with Broader Sustainable Development Issues",
      sections: [
        {
          blocks: [
            "In June 2026, JLU-FBH **was invited to participate in the 2026 Acceleration Week for Global Youth Development Programps, organized by UNICEF**. Team member Zecun Li joined the **“Health and Well-being”** thematic group. The event brought together young people from different countries, professional backgrounds, and fields of practice to explore health, technology, education, and sustainable development through mentor-led lectures, project pitches, case discussions, company visits, and project exchanges. It gave us an opportunity to look beyond CirCure and reconsider the contexts in which health projects operate: **a shared goal of improving health can involve very different challenges across countries, resource settings, and social environments.**",
          ],
        },
        {
          heading: "01 A Shared Health Goal, Different Challenges",
          blocks: [
            "The “Health and Well-being” thematic group focused on **disease prevention, digital health technologies, and access to healthcare resources**. We shared our team’s iGEM work from 2025 and 2026 and learned from young practitioners running health projects in other regions. Their experiences highlighted substantial differences in local needs and conditions. Some regions placed greater emphasis on disease prevention and health education, while others faced shortages of healthcare resources. Some projects had already developed new technologies but still needed to determine who could realistically access them. These discussions reinforced that **improving health depends not only on new treatments or technologies, but also on their social context and the conditions under which they are used.**",
          ],
        },
        {
          heading: "02 Health Connects with Other SDGs",
          blocks: [
            "The project week also explored technological innovation, green development, artificial intelligence, education, and skills development.",
            "Conversations across these fields showed us how a health-focused project can extend beyond SDG 3. Developing new treatments and technologies involves **innovation**. Enabling public understanding and participation involves **education**. Ensuring that different populations can benefit equitably from technology involves **health equity and accessibility**. Moving technologies into production and use can also have implications for resource inputs and environmental impacts. Rather than simply adding SDG labels to CirCure, these connections prompted a broader question: **what other issues does a project engage with as it works to address a health need?**",
          ],
        },
        {
          heading: "03 From Individual Goals to Relationships Between Goals",
          blocks: [
            "The exchange did not directly change CirCure’s experimental design. It broadened the scope of our impact analysis.",
            "Previously, we had focused primarily on how CirCure could contribute to **SDG 3 — Good Health and Well-being**. Engaging with young people from different countries and fields encouraged us to consider how progress toward a health goal can also depend on **technological innovation, disease prevention, access to resources, and social equity**. We moved beyond asking which SDGs were relevant to CirCure and began examining **why these goals are connected, whether those connections always hold, and how they might change with implementation conditions**. We later organized these reflections into a more structured approach, helping lay the foundation for our use of **SST-QN** to systematically analyze potential synergies, trade-offs, and conditional relationships among SDGs.",
          ],
        },
      ],
    },
  },
];

/* ----------------------------------------------------------------------------
 * SDG 3 chapter
 * -------------------------------------------------------------------------- */

export const sdg3Chapter: SdgChapter = {
  id: "sdg3",
  headingId: "sdg3-health",
  index: "4.1",
  title: "SDG3: Good Health and Well-being",
  intro: [
    "For patients with TNBC, uncertainty about recurrence can persist long after surgery, while additional treatment may bring physical, practical, and financial burdens. We chose SDG 3 to guide our exploration of a **postoperative therapeutic vaccine strategy**, keeping **long-term benefit, quality of life, and access** central to how we evaluate its potential—so that our research responds to patients’ hopes of planning their lives with greater confidence.",
  ],
  stakeholders: {
    lead: [
      "To understand what meaningful health value would look like for CirCure, we engaged stakeholders across the patient journey. Clinicians helped us define the clinical need and target population; patients and families helped us understand treatment value and burden; Professionals in payment and healthcare access helped us consider affordability and accessibility; and other health-related stakeholders further informed communication, prevention, and long-term implementation. Together, these perspectives progressively shaped whom CirCure aims to serve, how we evaluate its potential value, and what conditions would be necessary for that value to reach patients.",
    ],
    profiles: sdg3Profiles,
  },
  consequences: {
    lead: [
      "CirCure remains a research-stage project. We therefore distinguish laboratory exploration from demonstrated clinical health benefits. Our analysis separates **short-term changes** already informed by stakeholder feedback from the **long-term social, economic, and environmental impacts** that CirCure could have as an adjuvant therapy following surgery for TNBC, subject to further clinical validation and technological translation.",
    ],
    shortTerm: {
      heading: "Short-Term Impacts",
      paragraphs: [
        "At this stage, the clearest impact of Circure has been shaping how we define the patients we aim to serve, the outcomes that matter, and the way we engage with people affected by the disease—not demonstrating improved patient health outcomes.",
        "**Clinicians** helped us focus on **patients with TNBC who have undergone surgery but remain at risk of recurrence or metastasis**, and adopt the principle of **prioritizing efficacy while optimizing safety**. **Patients and their families** broadened our understanding of treatment value to include quality of life, treatment burden, and real-world access. Before speaking with patients, we also adapted our interview approach in response to communication guidance, with an emphasis on **respecting personal boundaries** and **showing compassion**.",
        "This input has shaped both our therapeutic priorities and our approach to stakeholder engagement.",
      ],
    },
    longTerm: {
      heading: "Long-Term Impacts",
      intro:
        "If CirCure progresses through further efficacy and safety testing and clinical validation toward use as an adjuvant therapy following surgery for TNBC, its impacts could extend beyond patient health. We examine these potential long-term impacts across social, economic, and environmental dimensions, distinguishing changes supported by current project evidence from outcomes that remain to be validated.",
    },
    dimensions: [
      {
        id: "social",
        title: "Social Impacts",
        benefit:
          "If CirCure effectively reduces recurrence and metastasis after surgery for TNBC, it could provide an additional adjuvant treatment option and improve long-term disease control and quality of life. Greater disease stability could help patients return to work and everyday activities, while reducing the disruption that uncertainty about recurrence brings to their own and their families’ long-term plans.",
        risk:
          "Additional adjuvant therapy may also involve ongoing treatment, side effects, and caregiving needs. If patients require prolonged family care or experience substantial disruption to work and daily life, these burdens could extend to family members. Regional differences in healthcare resources, ability to pay, and treatment opportunities could also lead to unequal access to potential benefits.",
        boundary:
          "Currently, no clinical evidence shows that CirCure reduces recurrence rates or improves disease-free survival, long-term survival, or patient quality of life. We also have no data demonstrating reduced family caregiving burdens or recurrence-related psychological stress. These remain potential long-term outcomes identified through patient and family needs; they cannot be inferred directly from our current in vitro experiments.",
      },
      {
        id: "economic",
        title: "Economic Impacts",
        intro:
          "For a potential adjuvant therapy added to standard treatment following surgery, a central economic consideration is **the balance between additional treatment burdens and potential long-term health benefits**. Family members’ feedback highlighted that these burdens extend beyond medical expenses to caregiving, time away from work, and the time families devote to care.",
        benefit:
          "If CirCure reduces recurrence and the need for further treatment, it could lower some patients’ medical expenses associated with repeat hospitalizations, subsequent treatment, and long-term disease management. It could also ease indirect family burdens arising from ongoing care and interruptions to work.",
        risk:
          "Adding CirCure to postoperative treatment would incur additional costs. Patients’ eventual out-of-pocket costs would depend on **pricing, basic medical insurance coverage, supplementary coverage, and their ability to pay out of pocket**. Prolonged treatment, inability to work, or a need for ongoing family care could also increase indirect burdens through **lost income, caregiving, and time commitments**.",
        boundary:
          "There is currently no clinical or pharmacoeconomic evidence that any reduction in recurrence achieved with CirCure would offset the additional treatment and family burdens. Its long-term economic impacts require validation of future real-world data.",
      },
      {
        id: "environmental",
        title: "Environmental Impacts",
        intro:
          "At current research stage of CirCure, direct environmental impacts arise primarily from laboratory reagents, single-use consumables, biomedical waste, and the resources and energy required to operate laboratory equipment.",
        benefit:
          "More stable production processes and fewer unnecessary repeat production runs could reduce some resource waste in the future.",
        risk:
          "Large-scale RNA preparation, production consumables, storage, transport, and subsequent use could create additional resource and energy demands.",
        boundary:
          "CirCure has not entered large-scale production, and we do not yet have actual production or life cycle data to assess its overall environmental impact. To explore this question, we consulted companies working in carbon emissions management and accounting. These discussions highlighted the need to look beyond direct laboratory consumption to raw materials, large-scale production, packaging, storage, transport, and waste management. This broader life cycle perspective helps identify potential sources of resource consumption and carbon emissions. We examine resource responsibility and the environmental impacts of production in detail under **SDG 12**, rather than duplicating that analysis under SDG 3.",
      },
    ],
  },
  alignment: {
    lead: [
      "Using the potential relationships identified through SST-QN as a starting point, we examined CirCure’s **project design, stakeholder feedback, experimental results, and actions undertaken** to assess whether these relationships occur within the project and the extent to which they are supported by current evidence.",
    ],
    // The source table's Why column is shifted one row down (row 1 empty, a
    // trailing orphan row); each Why below is matched to its relationship as
    // confirmed by the Key Findings. The source file itself is left untouched.
    table: {
      headers: ["Relationship", "Status", "Interaction", "Why"],
      rows: [
        [
          "SDG 3 ↔ SDG 9",
          "Core (C)",
          "Positive",
          "Postoperative TNBC patients’ need to reduce recurrence and achieve long-term benefits directly shaped CirCure’s focus and technical design. Experimental testing also progressed from assessing immune activation to evaluating functional antitumor activity in vitro. Health needs define what the technology must address, while reliable functional evidence determines whether there is a sound basis for pursuing that health goal.",
        ],
        [
          "SDG 3 → SDG 4",
          "Core (C)",
          "Positive",
          "Advice from women’s health experts on breast health, appropriate screening, and early detection was translated directly into public education materials and activities. These health needs have already led to concrete educational action.",
        ],
        [
          "SDG 3 ↔ SDG 10",
          "Conditional (±)",
          "Context-dependent",
          "If reasonable pricing, insurance coverage, supplementary financial support, and healthcare resources enable more patients to access treatment, health innovation may advance equity. However, high out-of-pocket costs or unequal access to healthcare resources could widen gaps in treatment opportunities.",
        ],
        [
          "SDG 3 ↔ SDG 12",
          "Conditional (±)",
          "Context-dependent",
          "Scaling up CirCure’s production and use could give more patients access to a new treatment option, while also increasing demand for raw materials, disposable supplies, energy, storage, and transport, and generating more waste. The overall impact will depend on production efficiency and resource management.",
        ],
        [
          "SDG 17 → SDG 3",
          "Exploratory (E)",
          "Positive",
          "Input from clinicians, patients and caregivers, healthcare financing professionals, public health experts, and young practitioners worldwide has already shaped CirCure’s treatment focus, assessment of treatment value, access analysis, and health communication. We can confirm that collaboration has improved project decisions, but cannot yet conclude that it has directly improved patients’ long-term health outcomes.",
        ],
        [
          "SDG 3 → SDG 5",
          "Excluded (0)",
          "None",
          "CirCure focuses on TNBC and women’s health. However, better treatment for diseases affecting women and greater breast health awareness do not, by themselves, demonstrate progress on structural gender inequalities in resource allocation, decision-making, or participation in society.",
        ],
      ],
    },
    findings: [
      "**SDG 3 ↔ SDG 9 and SDG 3 → SDG 4 currently have the clearest evidence supporting their classification as Positive Core Interactions.** The former is reflected in our project positioning, technical design, and functional experimental validation to date. The latter is supported by educational activities on breast health, screening, and early detection developed directly in response to women’s health needs.",
      "**The directions of SDG 3 ↔ SDG 10 and SDG 3 ↔ SDG 12 depend on future implementation conditions.** For SDG 10, the relationship hinges on whether pricing, insurance coverage, and healthcare resources allow different patients to access treatment. For SDG 12, the analysis must consider both expanded access to healthcare and the additional resources required for production. Both relationships therefore remain **Conditional (±)**; we do not assume in advance that either will result in synergy or a trade-off.",
      "For **SDG 17 → SDG 3**, current evidence supports the role of participation by multiple stakeholders in improving problem identification and project decisions. These process improvements, however, do not yet establish benefits for patient health outcomes. We therefore retain the **Exploratory (E)** classification.",
      "For **SDG 3 → SDG 5**, we retain **Excluded(0)**. CirCure addresses women’s health, but we currently lack direct evidence of an impact on gender equality at a structural level. Our focus on women’s health alone does not establish such an impact.",
    ],
  },
  legacy: {
    intro: [
      "Through our work on SDG 3, we developed both a record of stakeholder interviews and a practical process for **identifying real-world health needs, engaging stakeholders in discussions, translating their feedback into project decisions, and incorporating those decisions into SDG analysis**. To help future iGEM teams build on this experience, we distilled the broadly applicable practices into reusable guides, recording forms, and analysis templates.",
    ],
    tools: [
      {
        title: "Stakeholder Interview Guide",
        why: "Different stakeholders offer different insights, so interviews need to be tailored to their roles.",
        whatItHelpsWith:
          "Clarifying **whom to ask, what to ask, how to follow up, and which findings need cross-checking**.",
        bestFor:
          "Interviews with patients, clinicians, public health professionals, healthcare financing stakeholders, and other groups requiring tailored or sensitive communication.",
        pdfs: pdfPair("stakeholder-interview-guide"),
      },
      {
        title: "Stakeholder–SDG Mapping Guide",
        why: "A single piece of feedback may relate to several SDGs. Mapping feedback solely by stakeholder role can lead to duplication or misclassification.",
        whatItHelpsWith: "Identifying the **primary SDG, related SDGs, and rationale for each link**.",
        bestFor:
          "Organizing large volumes of stakeholder feedback and laying a clear foundation for alignment assessment and analysis across SDGs.",
        pdfs: pdfPair("stakeholder-sdg-mapping-guide"),
      },
      {
        title: "Feedback-to-Action Record",
        why: "Listing whom we interviewed does not demonstrate that stakeholder engagement influenced the project.",
        whatItHelpsWith:
          "Recording **how key feedback was handled, what changed, and the reasoning behind the final decision**.",
        bestFor:
          "Showing how stakeholder feedback led to concrete changes in project design, evaluation, or communication.",
        pdfs: pdfPair("feedback-to-action-record"),
      },
      {
        title: "SDG Impact Documentation Template",
        why: "Projects in the research and development stage can easily present potential future impacts as outcomes already achieved.",
        whatItHelpsWith:
          "Distinguishing **changes supported by current evidence, impacts that depend on specific conditions, and outcomes requiring future validation**.",
        bestFor:
          "Preparing the Consequences, Evidence, and Sustainability summaries while keeping claims within the limits of available evidence.",
        pdfs: pdfPair("sdg-impact-documentation-template"),
      },
    ],
  },
  evidence: {
    intro: [
      "CirCure’s current contribution to SDG 3 lies in integrating patient and family needs into research decisions, exploring therapeutic potential through preliminary experiments, and sharing reusable tools to support future evaluation of health benefits.",
    ],
    stats: [
      { id: "stakeholders", value: 49, label: "Stakeholders across five groups" },
      { id: "improvements", value: 8, label: "Traceable project improvements" },
      { id: "dc-maturation", value: 22.37, decimals: 2, unit: "%", label: "Mature dendritic cells (CD80⁺CD86⁺)" },
      { id: "tumor-volume", value: 89.6, decimals: 1, unit: "%", label: "Lower endpoint tumor volume than PBS" },
    ],
    measurable: [
      {
        text: "Engaged **49 stakeholders across five groups**: patients, family caregivers, clinical and medical professionals, healthcare payer representatives, and sustainability practitioners.",
        figure: "sdg3StakeholdersDistribution",
      },
      {
        text: "Translated stakeholder feedback into **eight traceable project improvements**, linking stakeholder input to documented changes.",
        figure: "sdg3TraceableImprovements",
      },
      {
        text: "In vitro flow cytometry showed that CirCure increased the proportion of mature dendritic cells (CD80⁺CD86⁺) from **10.33 ± 0.55%** in the empty circRNA-electroporated DC control to **22.37 ± 0.31%**, alongside increases in the proportions of activated and effector memory CD8⁺ T cells.",
      },
      {
        // "HLA-A*02:01" carries a literal asterisk, so it is not wrapped in
        // `**` (the inline formatter would pair the asterisks wrongly).
        text: "In vivo flow cytometry showed higher proportions of IFN-γ⁺CD8⁺ and GzmB⁺CD8⁺ cells in splenocytes from the vaccine group than in the PBS and empty-vector control groups. Because the epitopes are HLA-A*02:01-restricted, whereas the experiments used wild-type BALB/c mice, these findings serve as **platform proof of concept**.",
      },
      {
        text: "In the tumor growth study, endpoint tumor volume in the CirCure group was **89.6% lower than in the PBS group** and **73.2% lower than in the empty circRNA-LNP group** (n = 5 per group; Holm correction for multiple comparisons).",
      },
      {
        text: "Developed **four reusable tools, each available in Chinese and English, totaling eight files**, covering stakeholder interviews, SDG mapping, feedback-to-action tracking, and impact documentation to support reuse by other teams.",
        link: { label: "Click here to learn more and download.", target: "legacy" },
      },
    ],
    significant: [
      "CirCure’s contribution to SDG 3 is meaningful because **the needs of patients and families have shaped both our research direction and how we assess therapeutic value**. Stakeholder feedback led to eight traceable project improvements, bringing those needs into concrete research decisions.",
      "Clinical input focused the project on postoperative adjuvant therapy for TNBC, with reducing recurrence and metastasis and achieving lasting benefit as goals for future investigation. Patients and caregivers also highlighted how additional treatment could affect work, caregiving, and household finances. We therefore incorporated quality of life and access into our assessment, asking whether a potential treatment could help patients plan their lives again—and whether its benefits would justify the burdens they and their families would bear.",
      "**Our experimental findings provide an initial basis for pursuing this strategy.** Dendritic-cell maturation, CD8⁺ T-cell responses, and reduced tumor growth in the tested model support further investigation at different levels. However, the mismatch between HLA-restricted epitopes and wild-type mice limits interpretation. These findings do not yet demonstrate reduced postoperative recurrence or improved survival in patients.",
      "Finally, four bilingual tools make our approach to patient interviews, needs mapping, feedback integration, and impact documentation available for reuse, **helping other teams keep patients’ voices central to their research**. CirCure’s current contribution is a patient-informed research foundation, supported by preliminary experiments and methods others can build upon. Whether this foundation can lead to affordable, accessible health benefits remains to be established.",
    ],
  },
};