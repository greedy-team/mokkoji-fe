import styled from "styled-components";
import RegisterImg from "@/assets/register/register.svg?react";
import { useRef, useState } from "react";
import { categories } from "@/features/home/const/categories";
import { useNavigate } from "react-router-dom";

const ClubResgisterContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const ResgisterFormWrapper = styled.div`
  box-sizing: border-box;
  margin: 2%;
  width: 50%;
  height: fit-content;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  padding: 2%;
`;

const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 10%;
  font-size: 1.3rem;
  font-weight: bold;
  gap: 5px;
`;

const Form = styled.form`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const FormBox = styled.div`
  display: flex;
  gap: 10px;
`

const Label = styled.label`
  min-width: 100px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  &:focus {
    border-color: #007355;
    outline: none;
  }
`;

const Select = styled.select`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  background: #fff;
  &:focus {
    border-color: #007355;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  flex: 1;
  min-height: 80px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  &:focus {
    border-color: #007355;
    outline: none;
  }
`;

const ImgUploadBox = styled.div`
  border: 2px dashed #007355;
  border-radius: 10px;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const ImgPreview = styled.img`
  max-width: 100%;
  max-height: 110px;
  display: block;
`;

const UploadText = styled.div`
  color: #999;
  font-size: 0.95rem;
  text-align: center;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 16px;
`;

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 1rem;
  background: ${({ primary }) => (primary ? "#007355" : "#eee")};
  color: ${({ primary }) => (primary ? "#fff" : "#222")};
  cursor: pointer;
  &:hover {
    background: ${({ primary }) => (primary ? "#015941" : "#ddd")};
    box-shadow: 0 0 8px ${({ primary }) => (primary ? "#015941" : "#ddd")};
  }
`;

const Mark = styled.span`
  color: red;
  margin-left: 2px;
  font-size: 1em;
`;

interface ButtonProps {
  primary?: boolean;
}

function ClubRegistration() {
  const [form, setForm] = useState({
    clubName: "",
    category: "",
    leader: "",
    contact: "",
    intro: "",
    plan: "",
    logo: null as File | null,
  });
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({
        ...prev,
        logo: e.target.files![0],
      }));
      setLogoPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImgBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    alert("동아리 등록 완료!");
  };

  const RequiredMark = () => {
    return <Mark> *</Mark>;
  };

  return (
    <ClubResgisterContainer>
      <ResgisterFormWrapper>
        <div style={{ display: "flex", gap: "10px" }}>
          <RegisterImg width={30} height={30} />
          <FormTitle>
            신규 동아리 등록
            <div
              style={{
                fontSize: "0.9rem",
                fontWeight: "normal",
                color: "gray",
              }}
            >
              새로운 동아리 등록을 위한 기본 정보를 입력해주세요.
            </div>
          </FormTitle>
        </div>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <Label htmlFor="clubName">동아리명{RequiredMark()}</Label>
            <Input
              id="clubName"
              name="clubName"
              value={form.clubName}
              placeholder="동아리 이름을 입력하세요"
              required
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor="category">
              동아리 분류
              <RequiredMark />
            </Label>
            <Select
              id="category"
              name="category"
              value={form.category}
              required
              onChange={handleChange}
            >
              <option value="">분류를 선택하세요</option>
              {categories.map((category) => (
                <option value={category.name} key={category.name}>
                  {category.name}
                </option>
              ))}
            </Select>
          </FormRow>
          <FormRow>
            <Label htmlFor="leader">
              회장 이름
              <RequiredMark />
            </Label>
            <Input
              id="leader"
              name="leader"
              value={form.leader}
              placeholder="회장 이름을 입력하세요"
              required
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <Label htmlFor="contact">
              연락처
              <RequiredMark />
            </Label>
            <Input
              id="contact"
              name="contact"
              value={form.contact}
              placeholder="010-0000-0000"
              required
              onChange={handleChange}
            />
          </FormRow>
          <FormBox style={{ flexDirection: "column" }}>
            <Label htmlFor="intro">
              동아리 소개
              <RequiredMark />
            </Label>
            <TextArea
              id="intro"
              name="intro"
              value={form.intro}
              placeholder="동아리 소개글을 작성해주세요"
              required
              onChange={handleChange}
            />
          </FormBox>
          <FormBox style={{ flexDirection: "column" }}>
            <Label htmlFor="plan">주요 활동 계획</Label>
            <TextArea
              id="plan"
              name="plan"
              value={form.plan}
              placeholder="동아리의 주요 활동 계획을 작성해주세요"
              onChange={handleChange}
            />
          </FormBox>
          <FormBox style={{ flexDirection: "column" }}>
            <Label>동아리 로고/대표 이미지</Label>
            <ImgUploadBox onClick={handleImgBoxClick}>
              {logoPreview ? (
                <ImgPreview src={logoPreview} alt="미리보기" />
              ) : (
                <UploadText>
                  이미지를 드래그하거나 클릭하여 업로드하세요
                  <br />
                  <span style={{ fontSize: "0.9em", color: "#bbb" }}>
                    최대 2MB, JPG, PNG 파일 지원
                  </span>
                </UploadText>
              )}
              <input
                type="file"
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleLogoChange}
              />
            </ImgUploadBox>
          </FormBox>
          <ButtonRow>
            <Button type="button" onClick={() => navigate(-1)}>
              취소
            </Button>
            <Button type="submit" primary>
              + 동아리 등록
            </Button>
          </ButtonRow>
        </Form>
      </ResgisterFormWrapper>
    </ClubResgisterContainer>
  );
}

export default ClubRegistration;
