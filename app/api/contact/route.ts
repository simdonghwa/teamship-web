import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name, email, phone, company, childGrade, message } = body;

    if (!name || !email || !type) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    // Resend 연동 (RESEND_API_KEY 환경변수 필요)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(resendKey);

      const typeLabels: Record<string, string> = {
        workshop:   '워크숍',
        bootcamp:   '부트캠프',
        keynote:    '키노트',
        consulting: '컨설팅·자문',
        other:      '기타 문의',
      };

      await resend.emails.send({
        from: 'Teamship 문의 <noreply@teamship.co.kr>',
        to: process.env.CONTACT_EMAIL ?? 'contact@teamship.co.kr',
        subject: `[${typeLabels[type]}] ${name}님의 문의`,
        html: `
          <h2>새 문의가 도착했습니다</h2>
          <table>
            <tr><td><b>유형</b></td><td>${typeLabels[type]}</td></tr>
            <tr><td><b>이름</b></td><td>${name}</td></tr>
            <tr><td><b>이메일</b></td><td>${email}</td></tr>
            ${phone ? `<tr><td><b>연락처</b></td><td>${phone}</td></tr>` : ''}
            ${company ? `<tr><td><b>회사</b></td><td>${company}</td></tr>` : ''}
            ${childGrade ? `<tr><td><b>자녀 학년</b></td><td>${childGrade}</td></tr>` : ''}
            ${message ? `<tr><td><b>내용</b></td><td>${message}</td></tr>` : ''}
          </table>
        `,
      });
    }

    // Google Sheets 연동 (선택 — 환경변수 설정 시 활성화)
    // TODO: sheets.ts 통해 저장

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
