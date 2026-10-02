import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, AlertCircle, BookOpen, Heart } from 'lucide-react';

export default function DataPage() {
  const { dispatch } = useGame();

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-3xl mx-auto pt-8 pb-16">
        {/* 标题 */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-red-600">乳腺健康科普核心数据</h2>
          <p className="text-gray-500 mt-2">科学认知，守护健康</p>
        </div>

        {/* 三阴性乳腺癌数据 */}
        <Card className="mb-6 border-red-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              三阴性乳腺癌流行病学数据
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>三阴性乳腺癌约占所有乳腺癌的 <strong>15-20%</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>早期发现并接受规范治疗，<strong>5年生存率可达90%以上</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>高危因素包括：遗传因素(BRCA突变)、初潮早/绝经晚、未生育或晚育、长期使用激素类药物等</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0" />
                <span>建议 <strong>40岁以上女性每年进行乳腺超声或钼靶检查</strong></span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              数据来源：中国医药信息查询平台、NCCN临床实践指南
            </p>
          </CardContent>
        </Card>

        {/* 男性乳腺癌 */}
        <Card className="mb-6 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              男性乳腺癌相关提示
            </h3>
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <p className="text-blue-800 font-medium text-center">
                男性乳腺癌发病率约为女性的 1/1000
              </p>
            </div>
            <p className="text-sm text-gray-700">
              早期症状与女性一致，出现<strong>乳房硬块、腋窝淋巴结肿大、乳头溢液或内陷</strong>等异常时，
              需及时就医检查。男性乳腺组织虽少，但同样可能发生癌变，不可忽视。
            </p>
          </CardContent>
        </Card>

        {/* 早期识别要点 */}
        <Card className="mb-6 border-green-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-green-700 mb-4">乳腺癌早期识别要点</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                '乳房无痛性硬块',
                '乳头异常溢液',
                '乳头内陷或偏移',
                '乳房皮肤凹陷（酒窝征）',
                '皮肤橘皮样改变',
                '腋下淋巴结肿大'
              ].map((symptom, idx) => (
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

        {/* 预防建议 */}
        <Card className="mb-8 border-purple-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-purple-700 mb-4">乳腺健康预防建议</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 保持规律作息，避免长期熬夜</li>
              <li>• 限制酒精摄入，最好不饮酒</li>
              <li>• 保持健康体重，避免肥胖</li>
              <li>• 坚持母乳喂养（育龄女性）</li>
              <li>• 定期运动，每周至少150分钟中等强度运动</li>
              <li>• 保持心情愉悦，减少精神压力</li>
              <li>• 不滥用激素类药物和保健品</li>
              <li>• 定期体检，40岁以上每年乳腺检查</li>
            </ul>
          </CardContent>
        </Card>

        {/* 来源标注 */}
        <div className="text-center text-xs text-gray-400 mb-8">
          <p>本游戏科普内容均来自权威医疗平台/指南，仅供科普参考</p>
          <p>就医请遵医嘱，如有不适请及时前往正规医院就诊</p>
          <p className="mt-2">来源：中国医药信息查询平台、NCCN临床实践指南、ASCO声明</p>
        </div>

        {/* 返回按钮 */}
        <div className="text-center">
          <Button
            className="bg-pink-500 hover:bg-pink-600"
            onClick={() => dispatch({ type: 'SET_PHASE', payload: 'mainMenu' })}
          >
            <Home className="w-4 h-4 mr-2" />
            返回主界面
          </Button>
        </div>
      </div>
    </div>
  );
}
