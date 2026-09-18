import {
  patientChatMessages,
  type PatientChatId,
  type PatientChatSide,
} from "../../../data/sustainabilityData";

interface PatientChatGroup {
  patientId: PatientChatId;
  side: PatientChatSide;
  messages: string[];
}

/** 把扁平消息按 patientId 连续段聚合成 4 个分组（A/B/C/D 各 2 条）。 */
function groupPatientMessages(): PatientChatGroup[] {
  const groups: PatientChatGroup[] = [];
  for (const m of patientChatMessages) {
    const last = groups[groups.length - 1];
    if (last && last.patientId === m.patientId) {
      last.messages.push(m.text);
    } else {
      groups.push({
        patientId: m.patientId,
        side: m.side,
        messages: [m.text],
      });
    }
  }
  return groups;
}

export function PatientChatDialog() {
  const groups = groupPatientMessages();

  return (
    <div className="chat-container">
      <div className="chat-container__list">
        {groups.map((group, i) => {
          const baseDelay = i * 0.6;
          return (
            <div
              className={`chat-group chat-group--${group.side}`}
              key={group.patientId}
            >
              <span
                className="chat-avatar"
                aria-hidden="true"
                style={{ animationDelay: `${baseDelay}s` }}
              >
                {group.patientId}
              </span>
              <div className="chat-group__col">
                {group.messages.map((text, j) => (
                  <p
                    className="chat-bubble"
                    key={j}
                    style={{
                      animationDelay: `${baseDelay + j * 0.25}s`,
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
