import { useGame } from '@/hooks/gameContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, AlertCircle, BookOpen, Heart } from 'lucide-react';

export default function DataPage() {
  const { state, dispatch } = useGame();
  const isZh = state.language === 'zh';

  const earlySymptomsZh = [
    '乳房无痛性硬块',
    '乳头异常溢液',
    '乳头内陷或偏移',
    '乳房皮肤凹陷（酒窝征）',
    '皮肤橘皮样改变',
    '腋下淋巴结肿大'
  ];

  const earlySymptomsEn = [
    'Painless breast lump',
    'Abnormal nipple discharge',
    'Nipple retraction or deviation',
    'Skin dimpling (dimple sign)',
    "Peau d'orange skin texture",
    'Axillary lymph node swelling'
  ];

  const preventionAdviceZh = [
    '• 保持规律作息，避免长期熬夜',
    '• 限制酒精摄入，最好不饮酒',
    '• 保持健康体重，避免肥胖',
    '• 坚持母乳喂养（育龄女性）',
    '• 定期运动，每周至少150分钟中等强度运动',
    '• 保持心情愉悦，减少精神压力',
    '• 不滥用激素类药物和保健品',
    '• 定期体检，40岁以上每年乳腺检查'
  ];

  const preventionAdviceEn = [
    '• Maintain a regular sleep schedule; avoid chronic sleep deprivation',
    '• Restrict alcohol intake; abstinence is strongly advised',
    '• Maintain a healthy BMI and prevent obesity',
    '• Practice breastfeeding when possible (for mothers)',
    '• Exercise regularly: at least 150 minutes of moderate-intensity aerobic exercise per week',
    '• Support psychological balance and mitigate chronic emotional stress',
    '• Avoid unregulated hormone-containing drugs and dubious wellness supplements',
    '• Undergo routine clinical examinations; annual screening for women 40+'
  ];

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-3xl mx-auto pt-8 pb-16">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-red-600">
            {isZh ? '乳腺健康科普核心数据' : 'Breast Health Core Clinical Data'}
          </h2>
          <p className="text-gray-500 mt-2">
            {isZh ? '科学认知，守护健康' : 'Evidence-Based Awareness, Safeguarding Health'}
          </p>
        </div>

        {/* Triple-Negative Breast Cancer */}
        <Card className="mb-6 border-red-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              {isZh ? '三阴性乳腺癌流行病学数据' : 'Triple-Negative Breast Cancer (TNBC) Epidemiological Data'}
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>
                  {isZh ? (
                    <>三阴性乳腺癌约占所有乳腺癌的 <strong>15-20%</strong></>
                  ) : (
                    <>Triple-negative breast cancer accounts for approximately <strong>15–20%</strong> of all breast cancer cases.</>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>
                  {isZh ? (
                    <>早期发现并接受规范治疗，<strong>5年生存率可达90%以上</strong></>
                  ) : (
                    <>With early detection and standardized multimodal treatment, the <strong>5-year survival rate can exceed 90%</strong>.</>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>
                  {isZh ? (
                    <>高危因素包括：遗传因素(BRCA突变)、初潮早/绝经晚、未生育或晚育、长期使用激素类药物等</>
                  ) : (
                    <>High-risk factors include: genetic predisposition (BRCA1/2 mutations), early menarche / late menopause, nulliparity or delayed first birth, and prolonged hormone therapy.</>
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>
                  {isZh ? (
                    <>建议 <strong>40岁以上女性每年进行乳腺超声或钼靶检查</strong></>
                  ) : (
                    <>Women aged <strong>40 and older are advised to undergo annual clinical breast ultrasound or mammography</strong>.</>
                  )}
                </span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              {isZh
                ? '数据来源：中国医药信息查询平台、NCCN临床实践指南'
                : 'Data sources: NCCN Clinical Practice Guidelines in Oncology, Clinical Medical Reference Databases'}
            </p>
          </CardContent>
        </Card>

        {/* Male Breast Cancer */}
        <Card className="mb-6 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {isZh ? '男性乳腺癌相关提示' : 'Male Breast Cancer Clinical Notes'}
            </h3>
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <p className="text-blue-800 font-medium text-center">
                {isZh
                  ? '男性乳腺癌发病率约为女性的 1/1000'
                  : 'Male breast cancer incidence is approximately 1/1,000 of female incidence'}
              </p>
            </div>
            <p className="text-sm text-gray-700">
              {isZh ? (
                <>
                  早期症状与女性一致，出现<strong>乳房硬块、腋窝淋巴结肿大、乳头溢液或内陷</strong>等异常时，需及时就医检查。男性乳腺组织虽少，但同样可能发生癌变，不可忽视。
                </>
              ) : (
                <>
                  Early manifestations mirror those in females. If anomalies such as <strong>hard breast lumps, axillary lymphadenopathy, nipple discharge, or retraction</strong> arise, prompt clinical evaluation is vital. Although males possess minimal mammary glandular tissue, malignancy can still arise and must never be ignored.
                </>
              )}
            </p>
          </CardContent>
        </Card>

        {/* Early Recognition Key Points */}
        <Card className="mb-6 border-green-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-green-700 mb-4">
              {isZh ? '乳腺癌早期识别要点' : 'Key Signs for Early Breast Cancer Recognition'}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {(isZh ? earlySymptomsZh : earlySymptomsEn).map((symptom, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  {symptom}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Prevention Guidelines */}
        <Card className="mb-8 border-purple-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-purple-700 mb-4">
              {isZh ? '乳腺健康预防建议' : 'Breast Health Prevention Guidelines'}
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {(isZh ? preventionAdviceZh : preventionAdviceEn).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Citations & Disclaimers */}
        <div className="text-center text-xs text-gray-400 mb-8">
          <p>
            {isZh
              ? '本游戏科普内容均来自权威医疗平台/指南，仅供科普参考'
              : 'The health education content in this game is adapted from authoritative clinical guidelines for educational reference only.'}
          </p>
          <p>
            {isZh
              ? '就医请遵医嘱，如有不适请及时前往正规医院就诊'
              : 'Always follow medical advice from certified physicians; consult a hospital promptly if symptoms occur.'}
          </p>
          <p className="mt-2">
            {isZh
              ? '来源：中国医药信息查询平台、NCCN临床实践指南、ASCO声明'
              : 'Sources: NCCN Clinical Practice Guidelines, ASCO Guidelines, Clinical Medicine Reference Databases'}
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Button
            className="bg-pink-500 hover:bg-pink-600"
            onClick={() => dispatch({ type: 'SET_PHASE', payload: 'mainMenu' })}
          >
            <Home className="w-4 h-4 mr-2" />
            {isZh ? '返回主界面' : 'Return to Main Menu'}
          </Button>
        </div>
      </div>
    </div>
  );
}
