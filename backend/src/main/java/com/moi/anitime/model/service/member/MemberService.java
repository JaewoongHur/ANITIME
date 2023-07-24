package com.moi.anitime.model.service.member;

import com.moi.anitime.api.request.member.MemberLoginReq;
import com.moi.anitime.api.request.member.GeneralMemberRegistReq;
import com.moi.anitime.model.entity.member.GeneralMember;
import com.moi.anitime.model.entity.member.Member;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface MemberService {
	void registGeneralMember(GeneralMemberRegistReq memberRegistReq);
	Member login(MemberLoginReq memberLoginReq);
    GeneralMember findMemberById(int memberNo);
}